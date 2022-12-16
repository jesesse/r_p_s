export const Player = () => {
    let hp = 5;

    const takeDamage = () => {
        hp--;
    }

    const getHp = () => {
        return hp;
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
        getHp,
        pickWeapon,
        takeDamage
    }
}