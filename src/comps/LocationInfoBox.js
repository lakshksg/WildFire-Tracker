function LocationInfoBox({ info }) {
    return(
        <div className="Location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <stong>{info.id}</stong></li>
                <li>TITLE: <stong>{info.title}</stong></li>

            </ul>
        </div>
    )
}
export default LocationInfoBox;