'use client'; // This is needed for client-side interactivity like useState

import React, { useState } from 'react'; // Import React and useState
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Brain,
  Database,
  Cpu,
} from "lucide-react"
import Image from "next/image" // Ensure Image is imported for Next.js image optimization

export default function Portfolio() {
  // State variables for the contact form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json();
        setStatus(`Failed to send message: ${data.message || res.statusText}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-accent2/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <span className="font-bold text-white pr-2 border-r border-gray-600">SN</span>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-accent1 transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-accent1 transition-colors">About</a>
              <a href="#education" className="text-foreground hover:text-accent1 transition-colors">Education</a>
              <a href="#experience" className="text-foreground hover:text-accent1 transition-colors">Experience</a>
              <a href="#skills" className="text-foreground hover:text-accent1 transition-colors">Skills</a>
              <a href="#projects" className="text-foreground hover:text-accent1 transition-colors">Projects</a>
              <a href="#contact" className="text-foreground hover:text-accent1 transition-colors">Contact</a>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with original image */}
      <section id="home" className="hero-section">
        <div className="max-w-7xl mx-auto p-8 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left fade-in-on-load">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-4">Saleha Noor</h1>
              <h2 className="text-2xl lg:text-3xl text-gray-400 mb-6">Aspiring AI Engineer | BSCS Student</h2>
              <p className="text-xl text-gray-500 mb-8 max-w-2xl">Turning Data into Intelligent Solutions</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <a href="/your_resume.pdf" download="Saleha_Noor_Resume">
  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
    <Download className="mr-2 h-5 w-5" />
    Download Resume
  </Button>
</a>
                <a href="#contact">
  <Button size="lg" className="btn-connect-white-blue">
    <Mail className="mr-2 h-5 w-5" />
    Let's Connect
  </Button>
</a>
              </div>
            </div>
               <div className="scrolling-text-container">
  <p className="scrolling-text">
    Hello, I&apos;m Saleha Noor Aspiring AI Engineer BSCS Student Turning Data into Intelligent Solutions 
  </p>
</div>
            <div className="flex-shrink-0 fade-in-on-load">
              <div className="relative floating-image">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-gray-700 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Saleha Noor - Professional Profile"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-full">
                  <Brain className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - UPDATED FOR DARK THEME */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                I&apos;m a passionate AI enthusiast and 5th-semester BSCS student at Fazaia Bilquis College, affiliated with Air University. My journey in artificial intelligence began with curiosity and has evolved into a deep commitment to creating intelligent solutions that make a difference.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                With hands-on experience in machine learning, robotics, and data analysis, I&apos;m dedicated to bridging the gap between theoretical knowledge and practical applications. I believe in the transformative power of AI to solve real-world problems and improve lives.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Currently expanding my expertise through an AI internship at Developers Hub Corporation, I&apos;m always eager to learn, collaborate, and contribute to innovative projects in the AI space.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="dark-card">
                <CardContent className="p-6 text-center fade-in-on-load">
                  <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Education</h3>
                  <p className="text-foreground">BSCS Student</p>
                </CardContent>
              </Card>
              <Card className="dark-card">
                <CardContent className="p-6 text-center fade-in-on-load">
                  <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Experience</h3>
                  <p className="text-foreground">AI Intern</p>
                </CardContent>
              </Card>
              <Card className="dark-card">
                <CardContent className="p-6 text-center fade-in-on-load">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Certification</h3>
                  <p className="text-foreground">AI Robotics</p>
                </CardContent>
              </Card>
              <Card className="dark-card">
                <CardContent className="p-6 text-center fade-in-on-load">
                  <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Focus</h3>
                  <p className="text-foreground">AI Solutions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    {/* Education Section - UPDATED FOR DARK THEME */}
<section id="education" className="py-16 px-4 sm:px-6 lg:px-8 dark-section">
  <div className="max-w-7xl mx-auto fade-in-on-load">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-primary mb-4">Education</h2>
      <div className="w-24 h-1 bg-primary mx-auto"></div>
    </div>
    <div className="space-y-8">
      <Card className="dark-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl text-foreground">
                Bachelor of Science in Computer Science
              </CardTitle>
              <CardDescription className="text-lg mt-2 text-foreground">
                Fazaia Bilquis College of Education For Womens (Affiliated with Air University)
              </CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary text-white">5th Semester</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            Currently pursuing BSCS with focus on artificial intelligence, machine learning, and software development. Maintaining strong academic performance while actively participating in AI-related projects and research.
          </p>
        </CardContent>
      </Card>

      {/* New Card for Intermediate in Computer Science */}
      <Card className="dark-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl text-foreground">
                Intermediate in Computer Science (ICS)
              </CardTitle>
              <CardDescription className="text-lg mt-2 text-foreground">
                Islamabad Model College for Girls (IMCG) F7/2
              </CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary text-white">Completed</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            Achieved a Grade A with 856 out of 1100 marks.
          </p>
        </CardContent>
      </Card>
      
      {/* New Card for Matriculation */}
      <Card className="dark-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl text-foreground">
                Matriculation (Science)
              </CardTitle>
              <CardDescription className="text-lg mt-2 text-foreground">
                Islamabad Model College for Girls (IMCG) I8/4
              </CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary text-white">Completed</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            Achieved an A1 Grade with 926 out of 1100 marks.
          </p>
        </CardContent>
      </Card>

      <Card className="dark-card">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl text-foreground">AI Robotics Course</CardTitle>
              <CardDescription className="text-lg mt-2 text-foreground">
                National Vocational & Technical Training Commission (NAVTTC)
              </CardDescription>
            </div>
            <Badge variant="secondary" className="bg-primary text-white">Completed</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            Comprehensive training in AI and robotics fundamentals, including machine learning algorithms, robotic systems, and practical implementation of AI solutions.
          </p>
        </CardContent>
      </Card>

    </div>
  </div>
</section>

      {/* Experience Section - UPDATED FOR DARK THEME */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <Card className="dark-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl text-foreground">AI Intern</CardTitle>
                  <CardDescription className="text-lg mt-2 text-foreground">Developers Hub Corporation</CardDescription>
                </div>
                <Badge className="bg-primary text-white">Current</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                Working on cutting-edge AI projects, developing machine learning models, and contributing to innovative solutions.Gaining hands-on experience in:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li>Machine Learning model development and optimization</li>
                <li>Data preprocessing and analysis</li>
                <li>AI algorithm implementation</li>
                <li>Collaborative software development</li>
                <li>Research and development of AI applications</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section - UPDATED FOR DARK THEME */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="dark-card">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-foreground border-foreground">Python</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">TensorFlow</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Scikit-learn</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Pandas</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">NumPy</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="dark-card">
              <CardHeader className="text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-foreground border-foreground">Python</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">JavaScript</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">C++</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Java</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">SQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="dark-card">
              <CardHeader className="text-center">
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">Data Science</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-foreground border-foreground">Data Analysis</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Visualization</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Statistics</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Jupyter</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="dark-card">
              <CardHeader className="text-center">
                <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-foreground">AI & Robotics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-foreground border-foreground">Deep Learning</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Computer Vision</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">NLP</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Robotics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section - UPDATED FOR DARK THEME AND HOVER EFFECT */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">My Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: General Health Query Chatbot */}
            <Card className="card">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/chatbot.png"
                    alt="General Health Query Chatbot"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-foreground">General Health Query Chatbot</CardTitle>
                <CardDescription className="text-foreground">An AI-powered chatbot for general health information and queries.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-foreground border-foreground">Python</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">NLP</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Machine Learning</Badge>
                </div>
                <a
                  href="https://github.com/Saleha321/General-Health-Query-Chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" size="sm" className="w-full bg-transparent text-foreground border-foreground hover:bg-gray-700">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Project 2: Churn End-to-End ML Pipeline */}
            <Card className="card">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/churn-pipeline.png"
                    alt="Churn End-to-End ML Pipeline"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-foreground">Churn End-to-End ML Pipeline</CardTitle>
                <CardDescription className="text-foreground">Developed a complete machine learning pipeline for churn prediction.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-foreground border-foreground">Python</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Scikit-learn</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Data Engineering</Badge>
                </div>
                <a
                  href="https://github.com/Saleha321/churn-End-to-End-ML-pipeline-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" size="sm" className="w-full bg-transparent text-foreground border-foreground hover:bg-gray-700">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Project 3: Multimodal ML Housing Price Prediction */}
            <Card className="card">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/housing-prediction.png"
                    alt="Multimodal ML Housing Price Prediction"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-foreground">Multimodal ML Housing Price Prediction</CardTitle>
                <CardDescription className="text-foreground">Predicting housing prices using multimodal machine learning techniques.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-foreground border-foreground">Python</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Deep Learning</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Data Fusion</Badge>
                </div>
                <a
                  href="https://github.com/Saleha321/Multimodal-ML-Housing-Price-Prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" size="sm" className="w-full bg-transparent text-foreground border-foreground hover:bg-gray-700">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Project 4: Context-Aware Chatbot Using LangChain/RAG */}
            <Card className="card">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/langchain-rag.png"
                    alt="Context-Aware Chatbot (LangChain/RAG)"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-foreground">Context-Aware Chatbot (LangChain/RAG)</CardTitle>
                <CardDescription className="text-foreground">Building an intelligent chatbot using LangChain and Retrieval-Augmented Generation.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-foreground border-foreground">Python</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">LangChain</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">RAG</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">LLMs</Badge>
                </div>
                <a
                  href="https://github.com/Saleha321/Context-Aware-Chatbot-Using-LangChain-or-RAG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" size="sm" className="w-full bg-transparent text-foreground border-foreground hover:bg-gray-700">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Project 5: Heart Disease Prediction */}
            <Card className="card">
              <CardHeader>
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src="/heart-disease.png"
                    alt="Heart Disease Prediction"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-foreground">Heart Disease Prediction</CardTitle>
                <CardDescription className="text-foreground">A machine learning model for predicting heart disease based on patient data.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-foreground border-foreground">Python</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Scikit-learn</Badge>
                  <Badge variant="outline" className="text-foreground border-foreground">Healthcare AI</Badge>
                </div>
                <a
                  href="https://github.com/Saleha321/Heart-Disease-Prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" size="sm" className="w-full bg-transparent text-foreground border-foreground hover:bg-gray-700">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
           {/* General Card to link to GitHub profile */}
<Card className="card">
  <CardHeader>
    {/* This is the new div for the image */}
    <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
      <img
        src="/generate.png" // Replace with the actual path to your image
        alt="GitHub Profile"
        className="w-full h-full object-cover transition-transform duration-300"
      />
    </div>
    <CardTitle className="text-foreground">Explore More Projects</CardTitle>
    <CardDescription className="text-foreground">View my full portfolio of projects and contributions on my GitHub profile.</CardDescription>
  </CardHeader>
  <CardContent>
    <a
      href="https://github.com/Saleha321" // Replace with your actual GitHub profile URL
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <Button variant="outline" size="sm" className="w-full bg-transparent text-foreground border-foreground hover:bg-gray-700">
        <Github className="mr-2 h-4 w-4" />
        View GitHub Profile
      </Button>
    </a>
  </CardContent>
</Card>
          </div>
        </div>
      </section>

      {/* Contact Section - UPDATED FOR DARK THEME */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 dark-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Let&apos;s Connect</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting AI projects or discuss opportunities? I&apos;d love to hear from you!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-accent1" />
                  <span className="text-foreground">salehanoor36@email.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-accent1" />
                  <span className="text-foreground">+92 5255103</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 text-accent1" />
                  <span className="text-foreground">Islamabad, Pakistan</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/saleha-noor-131222372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon" className="bg-transparent border-gray-600 hover:bg-gray-700 text-foreground">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://github.com/Saleha321"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon" className="bg-transparent border-gray-600 hover:bg-gray-700 text-foreground">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:salehanoor36@gmail.com">
                  <Button variant="outline" size="icon" className="bg-transparent border-gray-600 hover:bg-gray-700 text-foreground">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            {/* Contact Form Card */}
            <Card className="dark-card border-gray-700">
              <CardHeader>
                <CardTitle className="text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent1"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent1"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent1"
                      placeholder="Your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-white hover:bg-accent1">Send Message</Button>
                </form>
                {status && <p className="mt-4 text-center text-sm text-foreground">{status}</p>}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer - UPDATED FOR DARK THEME */}
      <footer className="bg-accent2 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Saleha Noor. All rights reserved. Built with passion for AI and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}