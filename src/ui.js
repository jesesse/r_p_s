export const UI = () => {

    const renderGame = () => {
        const rock = document.createElement('button')
        const paper = document.createElement('button')
        const scissors = document.createElement('button')

        rock.setAttribute('id', 'rock');
        paper.setAttribute('id', 'paper');
        scissors.setAttribute('id', 'scissors');

        rock.textContent = 'rock';
        paper.textContent = 'paper';
        scissors.textContent = 'scissors'

        document.body.appendChild(rock)
        document.body.appendChild(paper)
        document.body.appendChild(scissors)

        const scoreArea = document.createElement('div');
        scoreArea.classList.add('score-area')
        document.body.appendChild(scoreArea);
    }
    
    const renderScoreArea = (playerScore = 0, cpuScore = 0) => {
        const scoreArea = document.querySelector('.score-area');
        while(scoreArea.lastChild) scoreArea.removeChild(scoreArea.lastChild);

        const playerScoreContainer = document.createElement('div')
        const cpuScoreContainer = document.createElement('div')

        playerScoreContainer.textContent = `player score: ${playerScore}`;
        cpuScoreContainer.textContent = `player score: ${cpuScore}`;

        scoreArea.appendChild(playerScoreContainer);
        scoreArea.appendChild(cpuScoreContainer);
    }

    return{
        renderGame,
        renderScoreArea
    }
}