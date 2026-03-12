import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");

    const nextByAlphabet: Record<string, string> = {
        "🎄": "🎃",
        "🎃": "🎆",
        "🎆": "🦃",
        "🦃": "💘",
        "💘": "🎄",
    };

    const nextByDate: Record<string, string> = {
        "💘": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎆",
        "🎆": "💘",
    };

    return (
        <div>
            Holiday: {holiday}
            <Button
                onClick={() => {
                    setHoliday(nextByAlphabet[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextByDate[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
