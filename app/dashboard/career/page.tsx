"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  TrendingUp,
  ArrowLeft,
  Target,
  BarChart3,
  DollarSign,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Star,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

export default function CareerPage() {
  const [selectedRole, setSelectedRole] = useState("frontend")

  const careerMatches = [
    {
      id: "frontend",
      title: "Frontend Developer",
      match: 92,
      description: "Build user interfaces and experiences using modern web technologies",
      skills: ["React", "JavaScript", "CSS", "HTML", "TypeScript"],
      missingSkills: ["Vue.js", "Angular"],
      averageSalary: "$75,000 - $120,000",
      jobGrowth: "+13%",
      companies: ["Google", "Meta", "Netflix", "Airbnb"],
      requirements: [
        "Strong proficiency in JavaScript and modern frameworks",
        "Experience with responsive design and CSS",
        "Understanding of web performance optimization",
        "Knowledge of version control (Git)",
      ],
    },
    {
      id: "fullstack",
      title: "Full-Stack Developer",
      match: 78,
      description: "Work on both frontend and backend systems to build complete applications",
      skills: ["React", "JavaScript", "Node.js"],
      missingSkills: ["Database Design", "DevOps", "System Architecture"],
      averageSalary: "$80,000 - $140,000",
      jobGrowth: "+15%",
      companies: ["Stripe", "Shopify", "GitHub", "Vercel"],
      requirements: [
        "Proficiency in both frontend and backend technologies",
        "Database design and management experience",
        "API development and integration skills",
        "Understanding of deployment and DevOps practices",
      ],
    },
    {
      id: "backend",
      title: "Backend Developer",
      match: 65,
      description: "Focus on server-side logic, databases, and system architecture",
      skills: ["JavaScript", "Node.js"],
      missingSkills: ["Database Design", "System Architecture", "Cloud Services", "API Design"],
      averageSalary: "$85,000 - $150,000",
      jobGrowth: "+12%",
      companies: ["Amazon", "Microsoft", "Uber", "Spotify"],
      requirements: [
        "Strong programming skills in server-side languages",
        "Database design and optimization experience",
        "API development and microservices architecture",
        "Cloud platform experience (AWS, GCP, Azure)",
      ],
    },
  ]

  const skillGaps = [
    {
      skill: "Node.js",
      importance: "High",
      timeToLearn: "2-3 months",
      courses: ["Node.js Backend Development", "Express.js Fundamentals"],
    },
    {
      skill: "Database Design",
      importance: "High",
      timeToLearn: "1-2 months",
      courses: ["SQL Fundamentals", "Database Design Patterns"],
    },
    {
      skill: "System Architecture",
      importance: "Medium",
      timeToLearn: "3-4 months",
      courses: ["Microservices Architecture", "System Design Fundamentals"],
    },
  ]

  const marketTrends = [
    {
      trend: "Remote Work Adoption",
      impact: "Positive",
      description: "95% of tech companies now offer remote positions",
    },
    {
      trend: "AI Integration",
      impact: "High Demand",
      description: "Developers with AI/ML skills see 40% higher salaries",
    },
    {
      trend: "Cloud-First Development",
      impact: "Essential",
      description: "Cloud platform knowledge is now required for most positions",
    },
  ]

  const selectedCareer = careerMatches.find((career) => career.id === selectedRole)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold">Career Guidance</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard/code-review" className="text-sm font-medium hover:text-primary transition-colors">
              Code Review
            </Link>
            <Link href="/dashboard/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
          </div>
        </div>
      </nav>

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance mb-2">AI-Powered Career Guidance</h1>
          <p className="text-muted-foreground text-pretty">
            Discover your ideal career path with personalized insights based on your skills and interests.
          </p>
        </div>

        <Tabs defaultValue="matches" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="matches">Career Matches</TabsTrigger>
            <TabsTrigger value="skills">Skill Gaps</TabsTrigger>
            <TabsTrigger value="trends">Market Trends</TabsTrigger>
            <TabsTrigger value="roadmap">Learning Path</TabsTrigger>
          </TabsList>

          <TabsContent value="matches" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Career Options */}
              <div className="lg:col-span-1 space-y-4">
                <h3 className="text-lg font-semibold">Career Options</h3>
                {careerMatches.map((career) => (
                  <Card
                    key={career.id}
                    className={`cursor-pointer transition-colors ${selectedRole === career.id ? "ring-2 ring-primary" : ""}`}
                    onClick={() => setSelectedRole(career.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-balance">{career.title}</h4>
                        <Badge variant={career.match >= 90 ? "default" : career.match >= 75 ? "secondary" : "outline"}>
                          {career.match}%
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <Progress value={career.match} className="h-2" />
                        <p className="text-xs text-muted-foreground text-pretty">{career.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Selected Career Details */}
              <div className="lg:col-span-2">
                {selectedCareer && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl text-balance">{selectedCareer.title}</CardTitle>
                        <Badge variant="default" className="text-lg px-3 py-1">
                          <Target className="h-4 w-4 mr-1" />
                          {selectedCareer.match}% Match
                        </Badge>
                      </div>
                      <CardDescription className="text-pretty">{selectedCareer.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Market Info */}
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-5 w-5 text-accent" />
                          <div>
                            <p className="text-sm font-medium">Average Salary</p>
                            <p className="text-xs text-muted-foreground">{selectedCareer.averageSalary}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="h-5 w-5 text-secondary" />
                          <div>
                            <p className="text-sm font-medium">Job Growth</p>
                            <p className="text-xs text-muted-foreground">{selectedCareer.jobGrowth} annually</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Open Positions</p>
                            <p className="text-xs text-muted-foreground">12,500+ jobs</p>
                          </div>
                        </div>
                      </div>

                      {/* Skills Assessment */}
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>Your Matching Skills</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCareer.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center space-x-2">
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                          <span>Skills to Develop</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCareer.missingSkills.map((skill) => (
                            <Badge key={skill} variant="outline" className="border-destructive/50 text-destructive">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Top Companies */}
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center space-x-2">
                          <Star className="h-5 w-5 text-accent" />
                          <span>Top Hiring Companies</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCareer.companies.map((company) => (
                            <Badge key={company} variant="outline">
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className="space-y-4">
                        <h4 className="font-semibold">Typical Requirements</h4>
                        <ul className="space-y-2">
                          {selectedCareer.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-pretty">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Skill Gap Analysis</span>
                </CardTitle>
                <CardDescription>Focus on these skills to improve your career prospects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillGaps.map((gap, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{gap.skill}</h4>
                        <Badge variant={gap.importance === "High" ? "destructive" : "secondary"}>
                          {gap.importance} Priority
                        </Badge>
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Time to Learn</p>
                          <p className="text-sm">{gap.timeToLearn}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm font-medium text-muted-foreground mb-2">Recommended Courses</p>
                          <div className="flex flex-wrap gap-2">
                            {gap.courses.map((course) => (
                              <Badge key={course} variant="outline" className="text-xs">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Industry Market Trends</span>
                </CardTitle>
                <CardDescription>Stay ahead with current market insights and predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketTrends.map((trend, index) => (
                    <Alert key={index}>
                      <TrendingUp className="h-4 w-4" />
                      <AlertDescription>
                        <div className="flex items-center justify-between mb-2">
                          <strong>{trend.trend}</strong>
                          <Badge
                            variant={
                              trend.impact === "Positive"
                                ? "secondary"
                                : trend.impact === "High Demand"
                                  ? "default"
                                  : "destructive"
                            }
                          >
                            {trend.impact}
                          </Badge>
                        </div>
                        <p className="text-pretty">{trend.description}</p>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Personalized Learning Roadmap</span>
                </CardTitle>
                <CardDescription>Your step-by-step path to becoming a {selectedCareer?.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>

                    <div className="relative flex items-start space-x-4 pb-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Strengthen Core Skills (1-2 months)</h4>
                        <p className="text-sm text-muted-foreground text-pretty">
                          Complete advanced courses in your existing skills: React, JavaScript, TypeScript
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            Advanced React Patterns
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            TypeScript Fundamentals
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex items-start space-x-4 pb-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Learn Backend Technologies (2-3 months)</h4>
                        <p className="text-sm text-muted-foreground text-pretty">
                          Expand into full-stack development with Node.js and database management
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            Node.js Backend Development
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Database Design
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex items-start space-x-4 pb-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Build Portfolio Projects (1-2 months)</h4>
                        <p className="text-sm text-muted-foreground text-pretty">
                          Create 2-3 full-stack projects showcasing your new skills
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            E-commerce App
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Social Media Platform
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex items-start space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Start Job Applications</h4>
                        <p className="text-sm text-muted-foreground text-pretty">
                          Apply to {selectedCareer?.title} positions with your enhanced skillset
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
