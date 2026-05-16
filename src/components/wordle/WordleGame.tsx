"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Keyboard, type KeyState } from "./Keyboard";
import { getWordOfTheDay, TECH_WORDS, type TechWord } from "@/data/wordle-words";

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

interface GameState {
    guesses: string[];
    currentGuess: string;
    gameStatus: "playing" | "won" | "lost";
    solution: string;
}

export function WordleGame() {
    const [wordOfDay, setWordOfDay] = useState<TechWord>(getWordOfTheDay());
    const [gameState, setGameState] = useState<GameState>({
        guesses: [],
        currentGuess: "",
        gameStatus: "playing",
        solution: wordOfDay.word,
    });
    const [shake, setShake] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const showMessage = (msg: string, ms = 2000) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), ms);
    };

    const onKeyPress = useCallback(
        (key: string) => {
            if (gameState.gameStatus !== "playing") return;

            if (key === "Backspace") {
                setGameState((prev) => ({
                    ...prev,
                    currentGuess: prev.currentGuess.slice(0, -1),
                }));
                return;
            }

            if (key === "Enter") {
                if (gameState.currentGuess.length !== WORD_LENGTH) {
                    setShake(true);
                    setTimeout(() => setShake(false), 500);
                    showMessage("Not enough letters");
                    return;
                }

                // Removed validation check to allow any 5 letters as user requested
                
                const newGuesses = [...gameState.guesses, gameState.currentGuess.toLowerCase()];
                let newStatus: "playing" | "won" | "lost" = "playing";

                if (gameState.currentGuess.toLowerCase() === gameState.solution) {
                    newStatus = "won";
                    showMessage("Magnificent!", 5000);
                } else if (newGuesses.length >= MAX_GUESSES) {
                    newStatus = "lost";
                    showMessage(`The word was ${gameState.solution.toUpperCase()}`, 5000);
                }

                setGameState((prev) => ({
                    ...prev,
                    guesses: newGuesses,
                    currentGuess: "",
                    gameStatus: newStatus,
                }));
                return;
            }

            if (gameState.currentGuess.length < WORD_LENGTH && /^[A-Za-z]$/.test(key)) {
                setGameState((prev) => ({
                    ...prev,
                    currentGuess: prev.currentGuess + key,
                }));
            }
        },
        [gameState]
    );

    // Keyboard Event Listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return;

            const key = e.key;
            if (key === "Enter" || key === "Backspace" || /^[A-Za-z]$/.test(key)) {
                onKeyPress(key);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onKeyPress]);

    // Derive keyboard states
    const keyStates: Record<string, KeyState> = {};
    gameState.guesses.forEach((guess) => {
        guess.split("").forEach((letter, i) => {
            const isCorrect = gameState.solution[i] === letter;
            const isPresent = !isCorrect && gameState.solution.includes(letter);

            const currentState = keyStates[letter];
            if (currentState === "correct") return;

            if (isCorrect) {
                keyStates[letter] = "correct";
            } else if (isPresent) {
                keyStates[letter] = "present";
            } else if (!currentState) {
                keyStates[letter] = "absent";
            }
        });
    });

    const getTileState = (guess: string, index: number, isCurrentGuess: boolean) => {
        if (isCurrentGuess || !guess) return "empty";
        if (gameState.solution[index] === guess[index]) return "correct";
        if (gameState.solution.includes(guess[index])) return "present";
        return "absent";
    };

    const getTileStyle = (state: string) => {
        switch (state) {
            case "correct": return "bg-green-500 border-green-500 text-white dark:bg-green-600 dark:border-green-600";
            case "present": return "bg-yellow-500 border-yellow-500 text-white dark:bg-yellow-600 dark:border-yellow-600";
            case "absent": return "bg-slate-500 border-slate-500 text-white dark:bg-slate-700 dark:border-slate-700";
            default: return "border-border bg-background text-foreground";
        }
    };

    const resetGame = () => {
        const randomWord = TECH_WORDS[Math.floor(Math.random() * TECH_WORDS.length)];
        setWordOfDay(randomWord);
        setGameState({
            guesses: [],
            currentGuess: "",
            gameStatus: "playing",
            solution: randomWord.word,
        });
        setMessage(null);
    };

    // Helper arrays for rendering grid
    const pastGuesses = gameState.guesses;
    const isPlaying = gameState.gameStatus === "playing" && pastGuesses.length < MAX_GUESSES;
    const currentGuessRow = isPlaying ? [gameState.currentGuess.padEnd(WORD_LENGTH, " ")] : [];
    const emptyRowsCount = MAX_GUESSES - pastGuesses.length - (isPlaying ? 1 : 0);
    const emptyRows = Array(Math.max(0, emptyRowsCount)).fill("     "); // 5 spaces

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto py-8">
            {/* Hint Box */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-6 w-full"
            >
                <p className="text-foreground/80 italic text-sm md:text-base border border-black/10 dark:border-white/10 px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 backdrop-blur-sm shadow-sm inline-block">
                    <span className="font-bold text-primary mr-2">Hint:</span> 
                    {wordOfDay.hint}
                </p>
            </motion.div>

            {/* Toast Message */}
            <div className="h-12 flex items-center justify-center mb-4 min-w-48">
                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="bg-foreground text-background px-4 py-2 rounded-md font-bold text-sm tracking-wide shadow-md"
                    >
                        {message}
                    </motion.div>
                )}
            </div>

            {/* Grid */}
            <div className="flex flex-col gap-2 mb-8 p-4">
                {/* Past Guesses */}
                {gameState.guesses.map((guess, rowIdx) => (
                    <div key={`past-${rowIdx}`} className="flex gap-2">
                        {guess.split("").map((letter, colIdx) => {
                            const state = getTileState(guess, colIdx, false);
                            return (
                                <motion.div
                                    key={colIdx}
                                    initial={{ rotateX: -90 }}
                                    animate={{ rotateX: 0 }}
                                    transition={{ duration: 0.4, delay: colIdx * 0.1 }}
                                    className={`w-12 h-12 flex items-center justify-center text-2xl font-bold uppercase border-2 ${getTileStyle(state)}`}
                                >
                                    {letter}
                                </motion.div>
                            );
                        })}
                    </div>
                ))}

                {/* Current Guess */}
                {currentGuessRow.map((guess, rowIdx) => (
                    <motion.div
                        key={`current-${rowIdx}`}
                        className="flex gap-2"
                        animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    >
                        {guess.split("").map((letter, colIdx) => {
                            const isFilled = letter.trim() !== "";
                            return (
                                <div
                                    key={colIdx}
                                    className={`w-12 h-12 flex items-center justify-center text-2xl font-bold uppercase border-2 transition-colors ${isFilled ? "border-foreground" : "border-border/50"
                                        } ${getTileStyle("empty")}`}
                                >
                                    {isFilled && (
                                        <motion.span
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            {letter}
                                        </motion.span>
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>
                ))}

                {/* Empty Rows */}
                {emptyRows.map((guess: string, rowIdx: number) => (
                    <div key={`empty-${rowIdx}`} className="flex gap-2">
                        {guess.split("").map((_: string, colIdx: number) => (
                            <div
                                key={colIdx}
                                className={`w-12 h-12 border-2 border-border/30 ${getTileStyle("empty")}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* Keyboard */}
            <Keyboard onKeyPress={onKeyPress} keyStates={keyStates} />

            {/* Game Over Actions */}
            {gameState.gameStatus !== "playing" && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 flex flex-col items-center gap-4"
                >
                    <div className="flex gap-4">
                        <button
                            onClick={() => {
                                const grid = gameState.guesses.map(guess => {
                                    return guess.split("").map((letter, i) => {
                                        if (gameState.solution[i] === letter) return "🟩";
                                        if (gameState.solution.includes(letter)) return "🟨";
                                        return "⬛";
                                    }).join("");
                                }).join("\n");
                                const result = `Prapti's Tech Wordle ${gameState.gameStatus === "won" ? gameState.guesses.length : "X"}/${MAX_GUESSES}\n\n${grid}`;
                                navigator.clipboard.writeText(result);
                                showMessage("Result copied to clipboard!");
                            }}
                            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                            Share Result
                        </button>
                        <button
                            onClick={resetGame}
                            className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-md hover:bg-primary/90 transition-colors"
                        >
                            Play Again
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
