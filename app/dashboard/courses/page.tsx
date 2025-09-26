"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Star, Clock, Users, ArrowLeft, Search, Play, Target } from "lucide-react"
import Link from "next/link"

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  const recommendedCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      description: "Master advanced React concepts including hooks, context, and performance optimization",
      level: "Advanced",
      category: "Frontend",
      duration: "8 hours",
      rating: 4.8,
      students: 12500,
      progress: 0,
      match: 95,
      instructor: "Sarah Johnson",
      skills: ["React", "Hooks", "Performance", "Context API"],
      isRecommended: true,
    },
    {
      id: 2,
      title: "TypeScript Fundamentals",
      description: "Learn TypeScript from basics to advanced features for better JavaScript development",
      level: "Intermediate",
      category: "Programming",
      duration: "6 hours",
      rating: 4.7,
      students: 8900,
      progress: 0,
      match: 88,
      instructor: "Mike Chen",
      skills: ["TypeScript", "JavaScript", "Type Safety", "Interfaces"],
      isRecommended: true,
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js, Express, and databases",
      level: "Intermediate",
      category: "Backend",
      duration: "12 hours",
      rating: 4.6,
      students: 15200,
      progress: 0,
      match: 82,
      instructor: "Alex Rodriguez",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      isRecommended: true,
    },
  ]

  const inProgressCourses = [
    {
      id: 4,
      title: "JavaScript ES6+ Features",
      description: "Modern JavaScript features and best practices",
      level: "Intermediate",
      category: "Programming",
      duration: "5 hours",
      rating: 4.5,
      students: 6800,
      progress: 65,
      match: 90,
      instructor: "Emma Wilson",
      skills: ["JavaScript", "ES6+", "Async/Await", "Modules"],
      isRecommended: false,
    },
    {
      id: 5,
      title: "Git & GitHub Mastery",
      description: "Version control and collaboration with Git and GitHub",
      level: "Beginner",
      category: "Tools",
      duration: "4 hours",
      rating: 4.4,
      students: 9200,
      progress: 30,
      match: 85,
      instructor: "David Kim",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      isRecommended: false,
    },
  ]

  const allCourses = [
    ...recommendedCourses,
    ...inProgressCourses,
    {
      id: 6,
      title: "Python for Beginners",
      description: "Start your programming journey with Python",
      level: "Beginner",
      category: "Programming",
      duration: "10 hours",
      rating: 4.3,
      students: 18500,
      progress: 0,
      match: 75,
      instructor: "Lisa Park",
      skills: ["Python", "Programming Basics", "Data Types", "Functions"],
      isRecommended: false,
    },
  ]

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = !selectedLevel || course.level === selectedLevel
    const matchesCategory = !selectedCategory || course.category === selectedCategory

    return matchesSearch && matchesLevel && matchesCategory
  })

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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold">Course Recommendations</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard/code-review" className="text-sm font-medium hover:text-primary transition-colors">
              Code Review
            </Link>
            <Link href="/dashboard/career" className="text-sm font-medium hover:text-primary transition-colors">
              Career
            </Link>
          </div>
        </div>
      </nav>

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance mb-2">Personalized Course Recommendations</h1>
          <p className="text-muted-foreground text-pretty">
            AI-curated courses tailored to your skills, interests, and career goals.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Levels">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Categories">All Categories</SelectItem>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="Programming">Programming</SelectItem>
                  <SelectItem value="Tools">Tools</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="recommended" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="all">All Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-6">
            <div className="grid gap-6">
              {recommendedCourses.map((course) => (
                <Card key={course.id} className="relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-secondary/20">
                      <Target className="h-3 w-3 mr-1" />
                      {course.match}% Match
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="md:col-span-3 space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold text-balance mb-2">{course.title}</h3>
                          <p className="text-muted-foreground text-pretty">{course.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                            <span>{course.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{course.students.toLocaleString()} students</span>
                          </div>
                        </div>

                        <div className="text-sm">
                          <span className="text-muted-foreground">Instructor: </span>
                          <span className="font-medium">{course.instructor}</span>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                          <Badge
                            variant={
                              course.level === "Beginner"
                                ? "secondary"
                                : course.level === "Intermediate"
                                  ? "default"
                                  : "destructive"
                            }
                          >
                            {course.level}
                          </Badge>
                          <Badge variant="outline">{course.category}</Badge>
                        </div>

                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Start Course
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-6">
            <div className="grid gap-6">
              {inProgressCourses.map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="md:col-span-3 space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold text-balance mb-2">{course.title}</h3>
                          <p className="text-muted-foreground text-pretty">{course.description}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{course.progress}% complete</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                            <span>{course.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                          <Badge variant={course.level === "Beginner" ? "secondary" : "default"}>{course.level}</Badge>
                          <Badge variant="outline">{course.category}</Badge>
                        </div>

                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <div className="grid gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="relative overflow-hidden">
                  {course.isRecommended && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-secondary/20">
                        <Target className="h-3 w-3 mr-1" />
                        {course.match}% Match
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="grid gap-4 md:grid-cols-4">
                      <div className="md:col-span-3 space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold text-balance mb-2">{course.title}</h3>
                          <p className="text-muted-foreground text-pretty">{course.description}</p>
                        </div>

                        {course.progress > 0 && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span className="font-medium">{course.progress}% complete</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                            <span>{course.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{course.students.toLocaleString()} students</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                          <Badge
                            variant={
                              course.level === "Beginner"
                                ? "secondary"
                                : course.level === "Intermediate"
                                  ? "default"
                                  : "destructive"
                            }
                          >
                            {course.level}
                          </Badge>
                          <Badge variant="outline">{course.category}</Badge>
                        </div>

                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          {course.progress > 0 ? "Continue" : "Start Course"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
