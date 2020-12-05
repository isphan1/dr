import {Button, makeStyles } from '@material-ui/core'
import React from 'react'
import CustomButton from './CustomButton'
import SingleSkill from './SingleSkill'

const useStyles = makeStyles(theme=>({
    skill:{
        padding:"50px 60px"
    },
    title:{
        fontSize:"18px",
        fontWeight:"500"
    },
    tabLink:{
        color:"#000",
        fontSize:"13px",
        textDecoration:"none",
        textTransform:"capitalize",
        "&:hover":{
            color:"#37a000",
            cursor:"pointer",
            textDecoration:"underline",

        }
      },
}))

const topSkills = [
    {
        title:[
        "Android Developer",
        "Customer Service Representative",
        "Front-End Developer",
        "iOS Developer",
        "Mobile App Developer",
        "Sales Consultant",
        "Software Engineer",
        "Virtual Assistant",
    ]
    },
    {
        title:[
        "Bookkeeper",
        "Database Administrator",
        "Game Developer",
        "Java Developer",
        "PHP Developer",
        "SEO Expert",
        "Technical Writer",
        "Web Designer",
    ]
    },
    {
        title:[
        "Content Writer",
        "Data Scientist",
        "Graphic Designer",
        "JavaScript Developer",
        "Python Developer",
        "Social Media Manager",
        "UI Designer",
        "Wordpress Developer",
    ]
    },
    {
        title:[
        "Copywriter",
        "Facebook Developer",
        "Information Security Analyst",
        "Logo Designer",
        "Resume Writer",
        "Software Developer",
        "UX Designer",
        "Writer",
    ]
    },
]

const trendingSkills= [
    {
        title : [
            "Apple UIKit",
            "Apple Xcode",
            "Articulate storyline",
            "Atlassian Confluence",
            "Blockchain",
            "Customer retention",
            "eLearning",
            "Enterprise architecture",
        ]
    },
    {
        title:[
            "GitLab",
            "Go development",
            "Google App Engine API",
            "Google Cloud Platform",
            "Node.js",
            "Product photography",
            "Rapid prototyping",
            "Risk management",
        ]
    },
    {
        title:[
            "Scala development",
            "SCORM",
            "Tensorflow",
            "Volusion",
            "Dropbox API",
            "iPhone UI design",
            "Genetic algorithms",
            "Vue.js",
        ]
    },
    {
        title:[
            "Social customer service",
            "HR consulting",
            "Oculus Rift",
            "Microsoft Power BI",
            "Proposal writing",
            "Vuforia",
            "Instructional design",
            "React.js",
        ]
    }
]
const topSkillUs = [
    {
        title:[
            "Adobe Illustrator Experts in US",
            "Adobe Photoshop Experts in US",
            "Article Writers in US",
            "Blog Writers in US",
            "Content Writers in US",
    ]
    },
    {
        title:[
            "Creative Writers in US",
            "Customer Service Representatives in US",
            "Data Entry Specialists in US",
            "Editors in US",
            "Excel Experts in US",
    ]
    },
    {
        title:[
            "Graphic Designers in US",
            "HTML Developers in US",
            "HTML5 Developers in US",
            "JavaScript Developers in US",
            "Microsoft Word Experts in US",
    ]
    },
    {
        title:[
            "PowerPoint Experts in US",
            "Social Media Marketers in US",
            "Web Designers in US",
            "WordPress Developers in US",
            "Writers in US",
    ]
    },
]

const topCitiesUs = [
    {
        title:[
            "Atlanta, GA Freelancers",
            "Austin, TX Freelancers",
            "Brooklyn, NY Freelancers",
            "Charlotte, NC Freelancers",
            "Chicago, IL Freelancers",
            
    ]
    },
    {
        title:[
            "Dallas, TX Freelancers",
            "Denver, CO Freelancers",
            "Houston, TX Freelancers",
            "Las Vegas, NV Freelancers",
            "Los Angeles, CA Freelancers",
    ]
    },
    {
        title:[
            "Miami, FL Freelancers",
            "New York, NY Freelancers",
            "Orlando, FL Freelancers",
            "Philadelphia, PA Freelancers",
            "Phoenix, AZ Freelancers",
    ]
    },
    {
        title:[
            "Portland, OR Freelancers",
            "San Diego, CA Freelancers",
            "San Francisco, CA Freelancers",
            "San Jose, CA Freelancers",
            "Seattle, WA Freelancers",
    ]
    },
]

export default function Skills() {

    const classes = useStyles()

    return (
        <div className={classes.skill}>
            <SingleSkill data={topSkills} classes={classes} title="Top skills"/>
            <SingleSkill data={trendingSkills} classes={classes} title="Trending skills"/>
            
            <div style={{marginBottom:"20px",textAlign:"center"}}>
                <CustomButton background="#fff" color="#37a000">Browse All Skills</CustomButton>
            </div>

            <SingleSkill data={topSkillUs} classes={classes} title="Top Skills in Us"/>
            <SingleSkill data={topCitiesUs} classes={classes} title="Top Cities in Us"/>

            <div style={{marginBottom:"20px",textAlign:"center"}}>
                <Button variant="contained"
                    style={{
                    backgroundColor: "#fff",
                    color: "#37a000",
                    textTransform: "capitalize",
                    padding: "7.5px 30px",
                    }}
                >
                    Browse Us Freelancers
                </Button>           
              </div>

        </div>
    )
}
