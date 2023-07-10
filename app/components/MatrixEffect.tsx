import React, { useEffect, useState } from 'react';

type Character = null | {
    char: string;
    highlight?: boolean;
    fadeCount?: number;
}

const maxFadeCount = 5;

const MatrixEffect = () => {
    const [rows, setRows] = useState([]);



    useEffect(() => {
        const interval = setInterval(() => {
            setRows((prevRows) => {
                const newRow: Character[] = generateRandomRow();

                prevRows[prevRows.length - 1]?.forEach((character: Character, index) => {
                    if (character.highlight) {
                        newRow[index].fadeCount = maxFadeCount;
                    } else if (character.fadeCount && character.fadeCount > 0) {
                        newRow[index].fadeCount = character.fadeCount - 1;
                    }
                    if (!newRow[index].highlight && !newRow[index].fadeCount) {
                        newRow[index] = character;
                    }
                });

                const newRows = [...prevRows, newRow];
                return newRows.length > 10 ? newRows.slice(1) : newRows;
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    const generateRandomRow = () => {
        const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$$$<>="\'&/';
        const rowLength = 19;
        const availablePrices = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '2000', '3000', '4000', '5000'];
        let price = availablePrices[Math.floor(Math.random() * availablePrices.length)];
        let followPrice = false;
        const row = Array.from(Array(rowLength).keys()).map(() => {
            let character = null;
            if (followPrice) {
                if (price.length === 0) {
                    followPrice = false;
                    price = availablePrices[Math.floor(Math.random() * availablePrices.length)];
                    let char = getRandomChar(charSet);
                    if (char === '$') {
                        followPrice = true;
                    };
                    character = {
                        char,
                        highlight: followPrice,
                    };
                } else {
                    character = {
                        char: price.charAt(0),
                        highlight: true,
                    };
                    price = price.substring(1);
                }
            } else {
                let char = getRandomChar(charSet);
                if (char === '$') {
                    followPrice = true;
                };
                character = {
                    char,
                    highlight: followPrice,
                };
            }

            return character;
        });
        return row;
    };


    const getRandomChar = (charSet) => {
        return charSet.charAt(Math.floor(Math.random() * charSet.length));
    };

    const getCharacterClass = (character: Character) => {
        if (character?.highlight) {
            return 'font-extrabold';
        }
        else if (character?.fadeCount && character?.fadeCount > 0) {
            return 'font-extrabold';
        } else {
            return 'opacity-0';
        }
    };

    const getCharacterStyle = (character: Character) => {
        if (!character?.highlight && character?.fadeCount && character?.fadeCount > 0) {
            return {
                opacity: character.fadeCount / (maxFadeCount * 2),
            };
        }
    };


    return (
        <div>
            {rows.map((row, rowIndex) => (
                <div className="flex" key={rowIndex}>
                    {row.map((character: Character, characterIndex) => (
                        <div
                            key={characterIndex}
                            className={`text-gray-500 dark:text-gray-400 text-xl w-5 ml-1 ${getCharacterClass(character)}`}
                            style={getCharacterStyle(character)}
                        >
                            {character?.char}
                        </div>
                    ))}
                </div>
            ))
            }
        </div >
    );
};

export default MatrixEffect;
