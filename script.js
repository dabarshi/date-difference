const inputField = document.getElementById('input-field');
const resultContainer = document.getElementById('result-container');


const clickHandler = () => {
    const selectedDate = inputField.value;
    
    if (selectedDate) {
        const result = differenceCalculator(selectedDate);
        resultContainer.innerHTML = `<p class='show-result'>${result}</p>`
    }else{
        resultContainer.innerHTML = `<p class='show-result'>Please, Choose a date.</p>`;
    }



}

const differenceCalculator = (date) => {
    const selectedDate = date;
    const convertToDateObject = new Date(selectedDate);
    const getMillisecond = convertToDateObject.getTime();

    const currentDate = new Date().getTime();

    if (currentDate > getMillisecond) {

        const passedMilliseconds = currentDate - getMillisecond;

        if (passedMilliseconds > 1000 || passedMilliseconds === 1000) {
            const passedSeconds = passedMilliseconds / 1000;

            if (passedSeconds > 60 || passedSeconds === 60) {
                const passedMinutes = passedSeconds / 60;

                if (passedMinutes > 60 || passedMinutes === 60) {
                    const passedHours = passedMinutes / 60;

                    if (passedHours > 24 || passedHours === 24) {
                        const passedDays = passedHours / 24;

                        if (passedDays > 30 || passedDays === 30) {
                            const passedMonths = passedDays / 30;

                            if (passedMonths > 12 || passedMonths === 12) {
                                const passedYears = passedMonths / 12;
                                return `${Math.floor(passedYears)} years have passed`;
                            }
                            return `${Math.floor(passedMonths)} months have passed`;
                        }
                        return `${Math.floor(passedDays)} days have passed`;
                    }
                    return `${Math.floor(passedHours)} hours have passed`;
                }
                return `${Math.floor(passedMinutes)} minutes have passed`;
            }
            return `${Math.floor(passedSeconds)} seconds have passed`;
        };
        return `${Math.floor(passedMilliseconds)} milliseconds have passed`;
    } else {
        const remainedMilliseconds = getMillisecond - currentDate;

        if (remainedMilliseconds > 1000 || remainedMilliseconds === 1000) {
            const remainedSeconds = remainedMilliseconds / 1000;

            if (remainedSeconds > 60 || remainedSeconds === 60) {
                const remainedMinutes = remainedSeconds / 60;

                if (remainedMinutes > 60 || remainedMinutes === 60) {
                    const remainedHours = remainedMinutes / 60;

                    if (remainedHours > 24 || remainedHours === 24) {
                        const remainedDays = remainedHours / 24;

                        if (remainedDays > 30 || remainedDays === 30) {
                            const remainedMonths = remainedDays / 30;

                            if (remainedMonths > 12 || remainedMonths === 12) {
                                const remainedYears = remainedMonths / 12;
                                return `${Math.floor(remainedYears)} years remained`;
                            }
                            return `${Math.floor(remainedMonths)} months remained`;
                        }
                        return `${Math.floor(remainedDays)} days remained`;
                    }
                    return `${Math.floor(remainedHours)} hours remained`;
                }
                return `${Math.floor(remainedMinutes)} minutes remained`;
            }
            return `${Math.floor(remainedSeconds)} seconds remained`;
        };
        return `${Math.floor(remainedMilliseconds)} milliseconds remained`;
    }
}