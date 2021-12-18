import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  username: string;
  questionList: any = [
    {
      question: 'What is our First shift timings?',
      answer: 'Employees First shift timings starts at 6:30 a.m. and ends at 2:00 p.m. This is eligible for all employees.'
    },
    {
      question: 'How many hours should I work?',
      answer: 'Expected minimum work hours per day – 7hrs, failing to meet per day work hours mail alert will be triggered to Reporting authority for further action.'
    },
    {
      question: 'How many days of leave is an employee entitled to on marriage?',
      answer: 'The Company will give complementary paid leave of 7 days to the employees who get married during their services with us.'
    },
    {
      question: 'How much does an employee gets paid as referral bonus amount for referring his/her friends in Engineering Department?',
      answer: 'The referring employee would be entitled to receive a referral bonus of Rs 5,000/- based on the designation. Kindly note that the employees who refer candidates with no experience (Freshers) will not be eligible for any referral amount.'
    },
    {
      question: 'How much allowance is provided for employees who are working in night shift?',
      answer: 'The employee who are working in the night shift are eligible to get Rs.1500/- per month which will be paid under the approval of Division Head.'
    },
    {
      question: 'How many permissions does an employee entitled to in a month?',
      answer: 'Employees are entitled to avail four permissions in a month.'
    },
    {
      question: 'How many days of accumulated PL will be carry forward to next year?',
      answer: 'Maximum of 5 days from the accumulated PL as on Dec 31st will be taken into account as Carry Forward Leave (CF) and can be availed on or before end of April month.'
    },
    {
      question: 'Where does an employee record login and logoff time during working days?',
      answer: 'Employees must accurately record all worked time using the time recording system, biometric system and dctrak'
    }]
  userInputVal: String = null;

  listVal = []
  @ViewChild('target') private myScrollContainer: ElementRef;

  constructor() { }

  ngOnInit() {
    this.username = 'ramkumar'
    this.listVal = [
      {
        type: 'bot',
        data: 'Hello! Welcome, and thank you for visiting our site.',
        date: new Date().getHours() + ":" + new Date().getMinutes()
      }, {
        type: 'bot',
        data: 'How may I help you?',
        date: new Date().getHours() + ":" + new Date().getMinutes()
      }
    ]
    this.addQuestions()
  }

  addQuestions() {
    this.listVal.push({
      type: 'bot',
      data: 'question',
      qlist: this.questionList,
      date: new Date().getHours() + ":" + new Date().getMinutes()
    })
  }

  setAnswer(question) {
    const obj = this.questionList.find(x => x.question == question);
    console.log('ans   ', obj);
    this.listVal.push({
      type: 'user',
      data: question,
      date: new Date().getHours() + ":" + new Date().getMinutes()
    })
    this.listVal.push({
      type: 'bot',
      data: obj.answer,
      date: new Date().getHours() + ":" + new Date().getMinutes()
    })
    this.askUser()
  }

  askUser() {
    this.listVal.push({
      type: 'bot',
      data: 'ask',
      date: new Date().getHours() + ":" + new Date().getMinutes()
    })
  }

  closeChat() {
    this.listVal.push({
      type: 'bot',
      data: 'Thanks for your valuable time',
      date: new Date().getHours() + ":" + new Date().getMinutes()
    })
  }

  sendMsg() {
    this.listVal.push({
      type: 'user',
      data: this.userInputVal,
      date: new Date().getHours() + ":" + new Date().getMinutes()
    })
    this.complicateQuestion();
  }

  complicateQuestion() {
    this.listVal.push({
      type: 'bot',
      data: 'I am not sure how to answer this. I will connect you to a human agent to help you with your query.',
      date: new Date().getHours() + ":" + new Date().getMinutes()
    })
    this.userInputVal = null;
    this.askUser()
  }

}
