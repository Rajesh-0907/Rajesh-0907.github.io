var arr = [];
var question = document.getElementById('questions');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var onee = document.getElementById('onee');
var twoo = document.getElementById('twoo');
var threee = document.getElementById('threee');
var fourr = document.getElementById('fourr');
var cont = document.getElementById('container');
var res = document.getElementById('res');
var feed = document.getElementById('feedback');
var nam = document.getElementById('nam');
var time = document.getElementById('time');
var answers = document.getElementById('answers');
var bu = document.getElementById('buttons');
var su = document.getElementById('submit');
var sub = document.getElementById('submi');
var hi = document.getElementById('high');
var naa = document.getElementById('n');
var hii = document.getElementById('h');
var da = document.getElementById('d');
var ac = document.getElementById('ac');
var prev = document.getElementById('previous');
var nxt = document.getElementById('next');
var d = new Date();
var star = document.getElementById('start');

var interval;
var i = 0;
var j;
var counttime = 60;
var sum = 0;
sum1 = 0;

arr[0] = document.getElementById('numone');
arr[1] = document.getElementById('numtw');
arr[2] = document.getElementById('numthree');
arr[3] = document.getElementById('numfour');
arr[4] = document.getElementById('numfive');
arr[5] = document.getElementById('numsix');
arr[6] = document.getElementById('numseven');
arr[7] = document.getElementById('numeight');
arr[8] = document.getElementById('numnine');
arr[9] = document.getElementById('numten');

var min = 10;
var sec = 0;
function start() {
	if (nam.value == '') {
		window.alert('name required');
	} else {
		interval = window.setInterval(countdown, 1000);
		cont.style.display = 'inline';
		arr[0].checked = true;
		star.style.display = 'none';
	}
}

function countdown() {
	sec -= 1;
	if (sec < 0) {
		min -= 1;
		sec = 59;
	}
	if (min < 10) {
		if (sec < 10) time.innerHTML = '0' + min.toString() + ':' + '0' + sec.toString();
		else time.innerHTML = '0' + min.toString() + ':' + sec.toString();
	}
	if (min == 0 && sec == 0) {
		time.innerHTML = '00:00';
		result();
		window.clearInterval(interval);
	}
}

function result() {
	++sum1;
	if (sum1 == 1) {
		cont.style.border = 'none';
		question.style.display = 'none';
		answers.style.display = 'none';
		bu.style.display = 'none';
		su.style.display = 'none';
		sub.style.display = 'none';

		for (j = 0; j < 10; j++) {
			sum = sum + lists[j].score;
		}
		var j;
		var sc1 = 0;

		var acc;
		for (j = 0; j < 10; j++) {
			if (lists[j].check == 1) {
				if (lists[j].score == 1) sc1 += 1;
			}
		}
		acc = sc1;
		var hs = localStorage.getItem('highscore');
		if (sum > hs) {
			window.localStorage.setItem('highscore', sum);
			window.localStorage.setItem('name', nam.value);
			window.localStorage.setItem('No Of Correct questions', acc);
			window.localStorage.setItem('date', d);
		}
		hi.innerHTML = 'HighScore Details:';
		naa.innerHTML = 'Name: ' + window.localStorage.getItem('name');
		hii.innerHTML = 'Score: ' + window.localStorage.getItem('highscore');
		da.innerHTML = 'Date and Time: ' + window.localStorage.getItem('date');
		accu.innerHTML = 'No Of Correct questions: ' + window.localStorage.getItem('No Of Correct questions');
		res.innerHTML = 'your score: ' + sum.toString();
		if (sum == 10) feed.innerHTML = 'Excellent!!';
		else if (sum > 6 && sum < 10) feed.innerHTML = 'good';
		else if (sum == 5) feed.innerHTML = 'you can do better!!';
		else feed.innerHTML = 'Need to Prepare';
		time.innerHTML = '00:00';
		window.clearInterval(interval);

		ac.innerHTML = 'NO Of Correct Questions: ' + acc.toString();
	}
}
function update(id) {
	if (lists[i].check != 1) {
		window.alert('Give a response');
	} else if (lists[i].check2 != 0) {
		window.alert('responed already');
		lists[i].select.checked = false;
	} else {
		switch (id) {
			case 1:
				if (lists[i].select.value == '2020') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}
				break;
			case 2:
				if (lists[i].select.value == 'America') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}
				break;
			case 3:
				if (lists[i].select.value == 'Wuhan') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}
				break;
			case 4:
				if (lists[i].select.value == 'shortness of breath') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}
				break;
			case 5:
				if (lists[i].select.value == 'kiribati') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}
				break;
			case 6:
				if (lists[i].select.value == 'MSME') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}
				break;
			case 7:
				if (lists[i].select.value == 'Thailand') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}
				break;
			case 8:
				if (lists[i].select.value == '14') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}
				break;
			case 9:
				if (lists[i].select.value == '>60') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}

				break;
			case 10:
				if (lists[i].select.value == 'Libya') {
					lists[i].score = 1;
					cont.style.border = '4px solid #29ea07';
					question.style.backgroundColor = '#29ea07';
					lists[i].check1 = 1;
					lists[i].col = '#29ea07';
					lists[i].bor = '4px solid #29ea07';
					lists[i].check2 = 1;
				} else {
					cont.style.border = '4px solid red';
					question.style.backgroundColor = 'red';
					lists[i].check1 = 1;
					lists[i].col = 'red';
					lists[i].bor = '4px solid red';
					lists[i].check2 = 1;
				}
				break;
		}
	}
}
function next() {
	if (i < 9) {
		i = i + 1;
		question.innerHTML = lists[i].question;
		one.innerHTML = lists[i].one;
		two.innerHTML = lists[i].two;
		three.innerHTML = lists[i].three;
		four.innerHTML = lists[i].four;
		onee.value = lists[i].one;
		twoo.value = lists[i].two;
		threee.value = lists[i].three;
		fourr.value = lists[i].four;
		arr[i].checked = true;
		if (lists[i].check == 1) {
			lists[i].select.checked = true;
		} else {
			onee.checked = false;
			twoo.checked = false;
			threee.checked = false;
			fourr.checked = false;
		}
		if (lists[i].check1 == 1) {
			cont.style.border = lists[i].bor;
			question.style.backgroundColor = lists[i].col;
		} else {
			cont.style.border = '4px solid gray';
			question.style.backgroundColor = 'azure';
		}
	}
}

function previous() {
	if (lists[i].check1 == 1) {
		cont.style.border = lists[i].bor;
		question.style.backgroundColor = lists[i].col;
	} else {
		cont.style.border = '4px solid gray';
		question.style.backgroundColor = 'azure';
	}
	if (i > 0) {
		i = i - 1;
		question.innerHTML = lists[i].question;
		one.innerHTML = lists[i].one;
		two.innerHTML = lists[i].two;
		three.innerHTML = lists[i].three;
		four.innerHTML = lists[i].four;
		onee.value = lists[i].one;
		twoo.value = lists[i].two;
		threee.value = lists[i].three;
		fourr.value = lists[i].four;
		arr[i].checked = true;
		if (lists[i].check == 1) {
			lists[i].select.checked = true;
		} else {
			onee.checked = false;
			twoo.checked = false;
			threee.checked = false;
			fourr.checked = false;
		}
		if (lists[i].check1 == 1) {
			cont.style.border = lists[i].bor;
			question.style.backgroundColor = lists[i].col;
		} else {
			cont.style.border = '4px solid gray';
			question.style.backgroundColor = 'azure';
		}
	}
}
function check(sel) {
	lists[i].check = 1;
	lists[i].select = sel;
}

var lists = [
	{
		question: 'In which year covid-19 became a  global pandemic?',
		one: '2018',
		two: '2019',
		three: '2020',
		four: '2021',
		check: 0,
		select: '',
		id: 1,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which country has the most number of cases?',
		one: 'America',
		two: 'Italy',
		three: 'India',
		four: 'Australia',
		check: 0,
		select: '',
		id: 2,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Where was the virus originated?',
		one: 'NewYork',
		two: 'Delhi',
		three: 'Wuhan',
		four: 'Beijing',
		check: 0,
		select: '',
		id: 3,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which one is a symptom of covid19?',
		one: 'facia palsy',
		two: 'shortness of breath',
		three: 'fatigue',
		four: 'joint inflammation',
		check: 0,
		select: '',
		id: 4,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which country has no cases?',
		one: 'kiribati',
		two: 'America',
		three: 'Peru',
		four: 'Chile',
		check: 0,
		select: '',
		id: 5,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which sector is the most affected in India?',
		one: 'Agricultural Sector',
		two: 'Telecom',
		three: 'Insurance',
		four: 'MSME',
		check: 0,
		select: '',
		id: 6,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Where was the first case found outside china',
		one: 'Thailand',
		two: 'India',
		three: 'Italy',
		four: 'Russia',
		check: 0,
		select: '',
		id: 7,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'How long is the Incubation period?',
		one: '14',
		two: '10',
		three: '6',
		four: '12',
		check: 0,
		select: '',
		id: 8,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Which age groups are most likely to die?',
		one: '>60',
		two: '>40 and <60',
		three: '>20 and <40',
		four: '>0 and <20',
		check: 0,
		select: '',
		id: 9,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	},

	{
		question: 'Choose the country in which a Leader died due to covid 19?',
		one: 'Phillipines',
		two: 'South Korea',
		three: 'Libya',
		four: 'Mexico',
		check: 0,
		select: '',
		id: 10,
		check1: 0,
		col: '',
		bor: '',
		score: 0,
		check2: 0
	}
];

lists[0].five = 90;
console.log(lists[0].five);
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}
shuffle(lists);
question.innerHTML = lists[0].question;
one.innerHTML = lists[0].one;
two.innerHTML = lists[0].two;
three.innerHTML = lists[0].three;
four.innerHTML = lists[0].four;
onee.value = lists[0].one;
twoo.value = lists[0].two;
threee.value = lists[0].three;
fourr.value = lists[0].four;
number = 0;
console.log(lists[0].three);
function Switch(num) {
	switch (num) {
		case 0:
			question.innerHTML = lists[0].question;
			one.innerHTML = lists[0].one;
			two.innerHTML = lists[0].two;
			three.innerHTML = lists[0].three;
			four.innerHTML = lists[0].four;
			onee.value = lists[0].one;
			twoo.value = lists[0].two;
			threee.value = lists[0].three;
			fourr.value = lists[0].four;
			number = 0;
			i = 0;

			if (lists[0].check == 1) {
				lists[0].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}
			break;
		case 1:
			question.innerHTML = lists[1].question;
			one.innerHTML = lists[1].one;
			two.innerHTML = lists[1].two;
			three.innerHTML = lists[1].three;
			four.innerHTML = lists[1].four;
			onee.value = lists[1].one;
			twoo.value = lists[1].two;
			threee.value = lists[1].three;
			fourr.value = lists[1].four;
			i = 1;
			if (lists[1].check == 1) {
				lists[1].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}
			break;
		case 2:
			question.innerHTML = lists[2].question;
			one.innerHTML = lists[2].one;
			two.innerHTML = lists[2].two;
			three.innerHTML = lists[2].three;
			four.innerHTML = lists[2].four;
			onee.value = lists[2].one;
			twoo.value = lists[2].two;
			threee.value = lists[2].three;
			fourr.value = lists[2].four;
			i = 2;
			if (lists[2].check == 1) {
				lists[2].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}
			break;
		case 3:
			question.innerHTML = lists[3].question;
			one.innerHTML = lists[3].one;
			two.innerHTML = lists[3].two;
			three.innerHTML = lists[3].three;
			four.innerHTML = lists[3].four;
			onee.value = lists[3].one;
			twoo.value = lists[3].two;
			threee.value = lists[3].three;
			fourr.value = lists[3].four;
			i = 3;
			if (lists[3].check == 1) {
				lists[3].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}
			break;
		case 4:
			question.innerHTML = lists[4].question;
			one.innerHTML = lists[4].one;
			two.innerHTML = lists[4].two;
			three.innerHTML = lists[4].three;
			four.innerHTML = lists[4].four;
			onee.value = lists[4].one;
			twoo.value = lists[4].two;
			threee.value = lists[4].three;
			fourr.value = lists[4].four;
			i = 4;
			if (lists[4].check == 1) {
				lists[4].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}
			break;
		case 5:
			question.innerHTML = lists[5].question;
			one.innerHTML = lists[5].one;
			two.innerHTML = lists[5].two;
			three.innerHTML = lists[5].three;
			four.innerHTML = lists[5].four;
			onee.value = lists[5].one;
			twoo.value = lists[5].two;
			threee.value = lists[5].three;
			fourr.value = lists[5].four;
			i = 5;
			if (lists[5].check == 1) {
				lists[5].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}
			break;
		case 6:
			question.innerHTML = lists[6].question;
			one.innerHTML = lists[6].one;
			two.innerHTML = lists[6].two;
			three.innerHTML = lists[6].three;
			four.innerHTML = lists[6].four;
			onee.value = lists[6].one;
			twoo.value = lists[6].two;
			threee.value = lists[6].three;
			fourr.value = lists[6].four;
			i = 6;
			if (lists[6].check == 1) {
				lists[6].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}
			break;

		case 7:
			question.innerHTML = lists[7].question;
			one.innerHTML = lists[7].one;
			two.innerHTML = lists[7].two;
			three.innerHTML = lists[7].three;
			four.innerHTML = lists[7].four;
			onee.value = lists[7].one;
			twoo.value = lists[7].two;
			threee.value = lists[7].three;
			fourr.value = lists[7].four;
			i = 7;
			if (lists[7].check == 1) {
				lists[7].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}
			break;

		case 8:
			question.innerHTML = lists[8].question;
			one.innerHTML = lists[8].one;
			two.innerHTML = lists[8].two;
			three.innerHTML = lists[8].three;
			four.innerHTML = lists[8].four;
			onee.value = lists[8].one;
			twoo.value = lists[8].two;
			threee.value = lists[8].three;
			fourr.value = lists[8].four;
			i = 8;
			if (lists[8].check == 1) {
				lists[8].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}
			break;
		case 9:
			question.innerHTML = lists[9].question;
			one.innerHTML = lists[9].one;
			two.innerHTML = lists[9].two;
			three.innerHTML = lists[9].three;
			four.innerHTML = lists[9].four;
			onee.value = lists[9].one;
			twoo.value = lists[9].two;
			threee.value = lists[9].three;
			fourr.value = lists[9].four;
			i = 9;
			if (lists[9].check == 1) {
				lists[9].select.checked = true;
			} else {
				onee.checked = false;
				twoo.checked = false;
				threee.checked = false;
				fourr.checked = false;
			}
			if (lists[i].check1 == 1) {
				cont.style.border = lists[i].bor;
				question.style.backgroundColor = lists[i].col;
			} else {
				cont.style.border = '4px solid gray';
				question.style.backgroundColor = 'azure';
			}

			break;
	}
}
