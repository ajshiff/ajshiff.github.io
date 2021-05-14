(function () {
    function getAllInputReferences(ids) {
        let references = {}
        let kvps = ids.map(id => {
            return {
                key: id,
                value: document.getElementById(id)
            }
        })
        kvps.forEach(kvp => references[kvp.key] = kvp.value)
        return references
    }

    function wait(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function run(input, times, soundToPlay, displays) {
        input.disabled = true
        for (const time of times) {
            console.log(`starting ${time}ms timer`)
            displays.minutesRemaining.innerHTML = `${time / 60000}`
            await wait(time)
            console.log(`finished waiting ${time}ms`)
            await soundToPlay()
        }
        input.disabled = false
    }

    async function playSound (audioClip, clipDuration, times) {
        for (let i = 1; i <= times; i++) {
            console.log("playing..." + i)
            audioClip.play()
            await wait (clipDuration)
        }
    }

    function initializeEventListeners (inputs, waitTimes, audioElements, displayElements) {
        inputs.startTimer.addEventListener('click', () => run(inputs.startTimer, waitTimes, async () => await playSound(audioElements.cuckooSound, 2100, 5), displayElements))
        inputs.playSound.addEventListener('click', () => playSound(audioElements.cuckooSound, 2100, 1))
    }

    let displayFieldIds = ['minutesRemaining']
    let inputIds = ['startTimer', 'playSound']
    let audioIds = ['cuckooSound']
    let waitTimes = [
        60000,
        600000,
        60000,
        600000,
        60000,
        600000,
        180000,
    ]

    let displayElements = getAllInputReferences(displayFieldIds)
    let audioElements = getAllInputReferences(audioIds)
    let inputElements = getAllInputReferences(inputIds)
    initializeEventListeners(inputElements, waitTimes, audioElements, displayElements)
})()