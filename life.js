const wakeUp = () => { };
const goToWork = () => { };
const eatLunch = () => { };
const goHome = () => { };
const goToSleep = () => { };
const excuses = [];
const usedExcuses = [];
const explainToBoss = () => { };
const searchGoogle = async (queryType, subject) => { };
const searchStackOverflow = async (subject) => { };
const fixBug = async (solution) => { };
const bugToFix = [];
const googleSearchOptions = [];
const postEverywhere = (thing) => { };

// normal people
const life = (time) => {
    switch (time) {
        case '7':
            wakeUp();
            break;
        case '8':
            goToWork();
            break;
        case '11':
            eatLunch();
            break;
        case '16':
            goHome();
            break;
        case '23':
            goToSleep();
            break;
        default:
            console.log('I don\'t know what to do');
            break;
    }
};

//me
const dayOfMyLife = async (props) => {
    const { bugs, hungry, tired } = props;

    for (const bug in bugs) {

        let fixed = false;
        let fixOps = [];

        try {
            fixOps.push(await bigBrainWork(bug, searchGoogle, googleSearchOptions));
            fixOps.push(await bigBrainWork(bug, searchStackOverflow));

            fixed = fixOps.some(async (result) => {
                return await fixBug(result);
            });

            if (!fixed) {
                hungry ? eatLunch() : this.goAgain();
                tired ? goToSleep() : this.goAgain();
            }

            postEverywhere(fixed);

        } catch (error) {

            bugToFix.push(bug + ' ' + error);
            let excused = false;

            while (!excused) {
                let excuse = excuses[Math.floor(Math.random() * excuses.length)];

                if (!usedExcuses[excuse]) {
                    usedExcuses[excuse] = true;
                    explainToBoss(excuse);
                    excused = true;
                }
            }
        };
    };

    const bigBrainWork = async (subject, fn, options = null) => {
        let result = null;
        if (options) {
            result = options.map(async (option) => {
                return await fn(option, subject);
            });
            await fn(options, subject);
        }
        else {
            result = await fn(subject);
        }
        return result;
    };

};
