export const UI = () => {

    const renderPlayerWeaponOptions = () => {
        const rock = document.createElement('div')
        const paper = document.createElement('div')
        const scissors = document.createElement('div')

        rock.setAttribute('id', 'rock');
        paper.setAttribute('id', 'paper');
        scissors.setAttribute('id', 'scissors');

        rock.textContent = 'rock';
        paper.textContent = 'paper';
        scissors.textContent = 'scissors'

        document.body.appendChild(rock)
        document.body.appendChild(paper)
        document.body.appendChild(scissors)
    }

    return{
        renderPlayerWeaponOptions
    }
}