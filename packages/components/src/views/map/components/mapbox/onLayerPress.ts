/**
 * Creating separate file to handle clicks on the ShapeSource layer for players,
 * guilds, and anything that might come after. Previously the click handlers for
 * players were firing for guild clicks, and vice versa. No relevant bugs found
 * via googling, so for now we'll just create one universal handler.
 */

interface Props {
    /** Props for player and guild layers */
    event: any
    setMapOverlay?: any
    /** Player props */
    playerShape?: any
    setSelectedPlayer?: any
    /** Guild props */
    guildShape?: any
    setSelectedGuild?: any
    userAuthed?: any // We enable/disable overlay clicks based on auth status
    /** path props */
    pickupDropShape?: any

    setCurrentSelectionOverlay?: any
    showMapOverlayFor?: any
}

export const onLayerPress = (props: Props) => {
    const {
        nativeEvent: {
            payload: {
                properties: { cluster, type },
            },
        }, // type is 'player' or 'guild'
    } = props.event

    if (cluster) {
        return
    }

    switch (type) {
        case 'player':
            handlePlayerClick(props)
            break
        case 'guild':
            handleGuildClick(props)
            break
    }
}

export const onPickupDropPress = (props: Props) => {
    const {
        nativeEvent: {
            payload: {
                properties: { cluster }, // , type
            },
        }, // type is 'player' or 'guild'
    } = props.event

    if (cluster) {
        return
    }
    // if (type === 'pickupDrop') {
    //   handlePickupDropLocationClick(props)
    // }
}

const handlePlayerClick = (props: Props) => {
    const {
        event: {
            nativeEvent: {
                payload: {
                    properties: { id },
                },
            },
        },
        setSelectedPlayer,
        setMapOverlay,
    } = props

    console.tron.log(`Clicked player ${id}`)
    setSelectedPlayer(id)
    setMapOverlay('player')
    // showMapOverlayFor('player')
}

const handleGuildClick = (props: Props) => {
    const {
        event: {
            nativeEvent: {
                payload: {
                    properties: { id },
                },
            },
        },
        setSelectedGuild,
        // showMapOverlayFor,
        userAuthed,
    } = props

    if (!userAuthed) {
        return
    }

    setSelectedGuild(id)
    // showMapOverlayFor('guild')
}

// const handlePickupDropLocationClick = (props: Props) => {
//   const {
//     event: {
//       nativeEvent: {
//         payload: {
//           properties: { id, icon }
//         }
//       }
//     },
//     showMapOverlayFor,
//     setCurrentSelectionOverlay
//   } = props

//   setCurrentSelectionOverlay(icon)
//   showMapOverlayFor('pickupDrop')
// }
