export const Player = () => {
    let score = 0;

    const win = () => {
        score++;
    }

    const getScore = () => {
        return score;
    }

    const pickWeapon = () => {
        let ran = Math.floor(Math.random() * 3);

        switch (ran) {
            case 0 : return "paper";
            case 1 : return "rock";
            case 2 : return "scissors";
        }
    }

    return {
        getScore,
        pickWeapon,
        win
    }
}