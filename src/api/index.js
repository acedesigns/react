/**
 * ====================================================
 *
 * Created by anele on 2020/05/18.
 *
 * @anele_ace
 *
 * ====================================================
 */
import axios from "axios";

const url = 'https://numbersapi.p.rapidapi.com';
const jokeAPI = 'https://joke3.p.rapidapi.com';
const lovePercAPI = 'https://love-calculator.p.rapidapi.com';

const headers = {
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        "x-rapidapi-key": "96d8d96d0dmsh92aec14a72add2ap153e6ajsnd31719630ba4",
        "useQueryString": true
    }
};

const jokeHeaders = {
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "joke3.p.rapidapi.com",
        "x-rapidapi-key": "96d8d96d0dmsh92aec14a72add2ap153e6ajsnd31719630ba4",
        "useQueryString": true
    }
};

const loveHeaders = {
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "96d8d96d0dmsh92aec14a72add2ap153e6ajsnd31719630ba4",
        "useQueryString": true
    }
};

function randomIntFromInterval(min, max) {
    if( isNaN(min) && isNaN(max)){
        min = 1; max = 9999;
        return Math.floor(Math.random() * (max - min + 1) + min)
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}


export const fetchNumberFact = async() => {
    let num_sent = randomIntFromInterval();
    try {
        const  data =  await axios.get(`${url}/${num_sent}/math`, headers);

        return  { data:data.data, number: num_sent, lastUpdate: new Date() };

    } catch (error) {
        console.log(error, "Getting Number Fact");
    }
};


export const fetchDateFact = async () => {
    let days = randomIntFromInterval(1,27);
    let months = randomIntFromInterval(1,12);

    try {
        const data = await axios.get(`${url}/${months}/${days}/date`, headers);

        return { data: data.data, day: days, month: months};
    } catch (error) {
        return error;
    }
};


export const fetchRandJoke = async () => {

    try {
        const { data: { content, downvotes, upvotes, lastUpdate } } = await axios.get(`${jokeAPI}/v1/joke`, jokeHeaders);
        //console.log(data);

        return { content, downvotes, upvotes, lastUpdate };
    } catch (error) {
        return error;
    }
};


export const fetchLoveCompat = async (user) => {

    try {
        const { data : { fname, percentage, result, sname } }  = await axios.get(`${lovePercAPI}/getPercentage?fname=${ user.fname }&sname=${user.sname}`, loveHeaders);
        return { fname, percentage, result, sname};
    } catch (error) {
        return error;
    }
};
