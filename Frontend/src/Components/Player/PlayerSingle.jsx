const PlayerSingle = ({ currentPlayer }) => {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpeg" alt="Soccer Image" />
                        <span className="card-title">{currentPlayer.firstName} {currentPlayer.lastName}</span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {currentPlayer.phone} - Email: {currentPlayer.email}</p>
                        <p>Strength: {currentPlayer.strength} - Endurance: {currentPlayer.endurance}</p>
                        <p>Ability: {currentPlayer.ability} - Techniques: {currentPlayer.techniques}</p>
                    </div>
                    <div className="card-action">
                        Team: {currentPlayer.team}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerSingle