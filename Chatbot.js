import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import './Chatbot.css';
import { ThemeProvider } from "styled-components";

class ChatBotComponent extends Component {
    render() {
        const theme = {
            background: "white",
            fontFamily: "Helvetica Neue, Helvetica, Arial !important",
            headerBgColor: "#FF9933",
            headerFontColor: "#fff!important",
            headerFontSize: "20px",
            botBubbleColor: "#138808",
            botFontColor: "#fff",
            userBubbleColor: "#000080",
            userFontColor: "#fff"
        };
        const config = {
            width: "400px",
            height: "500px",
            floating: true,
            opened: false,
            headerTitle: 'Grievance Bot',
            fontFamily: "Helvetica Neue, Helvetica, Arial !important",
            recognitionEnable: true,
            bubbleOptionStyle: {
                background: '#FF9933'
            },
            botAvatar: "data:image/png;base64,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"
        };
        const divStyle = {
            animation: 'Lmuha 0.3s ease forwards',
            background: '#138808',
            fontSize: '14px',
            color: '#fff',
            display: 'inline-block',
            borderRadius: '18px 18px 18px 0',
            margin: '0 0 10px 0',
            overflow: 'hidden',
            position: 'relative',
            padding: '12px',
            fontFamily: 'Helvetica Neue, Helvetica, Arial !important'
        };
        const gsteps = [
            {
                id: "1",
                message: "Hi! I am your friendly Grievance Chatbot. I am here to help you. Let's get started!",
                trigger: "2"
            },
            {
                id: "2",
                message: "What can I help you with?",
                trigger: "3"
            },
            {
                id: "3",
                options: [
                    { value: 1, label: 'Help me post a new grievance', trigger: '4' },
                    { value: 2, label: 'Get the status of an existing grievance', trigger: '5' }
                ]
            },
            {
                id: '4',
                message: "Please enter your complaint.",
                trigger: '4-1'
            },
            {
                id: '4-1',
                user: true,
                trigger: '1000-2'
            },
            {
                id: '5',
                message: "Please enter your tracking reference number which was given at the time of filing the grievance.",
                trigger: '551'
            },
            {
                id: "551",
                user: true,
                trigger: '552'
            },
            {
                id: '552',
                message: 'In  this  grievance case the  ESIC (as reported to MoLE PG Cell by Nodal PGO ESIC HQ) have  furnished  their  report/reply/response for information of the  complainant as follows ... ',
                trigger: "552-2"
            },
            {
                id: '552-2',
                message: 'Reply/response of ESIC dt. 06/06/2019 It is informed that ATR has been received from Jangpura Dispensary stating that an office order has been issued to all officers and staff with the instruction to be on their seats while on duty so that no inconvenience is faced by ESIC Beneficiaries. The complaint is treated as Disposed of. 06/06/2019.',
                trigger: "552-3"
            },
            {
                id: '552-3',
                message: 'As per the above reply/report  dt. 06/06/2019 of the nodal PGO of ESIC this PG case is now replied to/disposed of on the PG portal a/c of Union MoLE however with the stipulation that if still any issue/matter (out of this PG case) related to Union MoLE still remains unresolved in his view then the petitioner may please submit his  such  unresolved  issue/further remaining grievance as a fresh PG afresh/again on the PG portal please.',
                trigger: "2"
            },

            {
                id: "996",
                message: "Thank You our team will be responding you within 24 Hrs.",
                trigger: "2"
            },
            {
                id: "1000-2",
                message: "Thanks for letting us know of this issue. Just let me help you file your greivance.",
                trigger: '1001'
            },
            {
                id: "1001",
                message: "Please enter your 12 digit Aadhar number.",
                trigger: '1002'
            },
            {
                id: "1002",
                user: true,
                trigger: '1003'
            },
            {
                id: '1003',
                message: "Please enter the 6 digit OTP that has been sent to your linked mobile number",
                trigger: '1004-1'
            },
            {
                id: '1004-1',
                user: true,
                trigger: '1004'
            },
            {
                id: '1004',
                message: 'Hi Shubash Gupta. We have successfully logged you in and your grievance.',
                trigger: '1005'
            },
            {
                id: '1005',
                message: 'Please find below the details of your grievance.',
                trigger: '1006'
            },
            {
                id: '1006',
                //message: 'Name: Shubash Gupta,Mobile: 98412 12345,Address: 45, Nehu Street, Freedom Avenue, Ashok Nagar, Chennai, 600 033,  Tamil Nadu',
                component: (
                    <div style={divStyle}>Name: Shubash Gupta,<br />Mobile: 98412 12345, <br />Address: 45, Nehu Street, Freedom Avenue, Ashoka Nagar, <br />South Delhi, 100 011,<br />Delhi</div>
                ),
                trigger: '1007'
            },
            {
                id: '1007',
                message: 'Your Grievance will be submitted to Ministry of Ayush.',
                trigger: '1008'
            },
            {
                id: '1008',
                options: [
                    { value: 1, label: 'Please confirm', trigger: '1008-1' },
                    { value: 2, label: 'Would you like to change the department?', trigger: '1008-2' },
                ]
            },
            {
                id: '1008-1',
                message: 'Your reference number is AYUSH/E/2019/00300. You can use this to track the progress of your grievance.',
                trigger: '2'
            },
            {
                id: '1008-2',
                message: 'Select concerned authority of grievance',
                trigger: '1008-3'
            },
            {
                id: '1008-3',
                options: [
                    { value: 1, label: 'Central Government', trigger: '1008-4' },
                    { value: 2, label: 'State Government', trigger: '1008-5' },
                    { value: 3, label: 'Other Organizations', trigger: '1008-6' }
                ]
            },
            {
                id: '1008-4',
                options: [
                    { value: 1, label: 'Department of Justice (Department)', trigger: '100000' },
                    { value: 2, label: 'Central Board of Direct Taxes (Income Tax) (Department)', trigger: '100000' },
                    { value: 3, label: 'Department of Fisheries (Department)', trigger: '100000' },
                    { value: 4, label: 'Change My Option', trigger: '1008-3' }
                ]
            },
            {
                id: '1008-5',
                options: [
                    { value: 1, label: 'Andra Pradesh', trigger: '100000' },
                    { value: 2, label: 'Kerala', trigger: '100000' },
                    { value: 3, label: 'Tamil Nadu', trigger: '100000' },
                    { value: 4, label: 'Telangana', trigger: '100000' },
                    { value: 5, label: 'Change My Option', trigger: '1008-3' }
                ]
            },
            {
                id: '1008-6',
                options: [
                    { value: 1, label: 'Department of Administrative Reforms and Public Grivance', trigger: '100000' },
                    { value: 2, label: 'ESIC Headquarters', trigger: '100000-1' },
                    { value: 5, label: 'Change My Option', trigger: '1008-3' }
                ]
            },
            {
                id: '100000-1',
                options: [
                    { value: 'ESIC Telangana Region', label: 'ESIC Telangana Region', trigger: '1000' },
                    { value: 'ESIC TamilNadu Region', label: 'ESIC TamilNadu Region', trigger: '1000' },
                    { value: 'ESIC Headquarters', label: 'ESIC Headquarters', trigger: '1000' }
                ]
            },
            {
                id: "100000",
                message: "Your Grievance will be submitted to Ministry of Ayush. Your reference number is AYUSH/E/2019/00300. You can use this to track the progress of your grievance.",
                trigger: "2"
            },
            {
                id: "1000",
                message: "Your Grievance will be submitted to {previousValue}, Ministry of Ayush. Your reference number is AYUSH/E/2019/00300. You can use this to track the progress of your grievance.",
                trigger: "2"
            }
        ];
        return (<div>
            <ThemeProvider theme={theme}>
                <ChatBot steps={gsteps} {...config} />
            </ThemeProvider>
        </div >);
    }
}
export default ChatBotComponent;
