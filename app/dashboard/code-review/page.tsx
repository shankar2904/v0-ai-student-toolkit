"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Code, Upload, CheckCircle, AlertTriangle, Info, Lightbulb, ArrowLeft, Clock, Star, Zap } from "lucide-react"
import Link from "next/link"

export default function CodeReviewPage() {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = async () => {
    if (!code.trim() || !language) return

    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 3000)
  }

  const mockReviews = [
    {
      id: 1,
      title: "React Todo Component",
      language: "JavaScript",
      status: "completed",
      score: 85,
      issues: 3,
      suggestions: 5,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "API Authentication Handler",
      language: "TypeScript",
      status: "completed",
      score: 92,
      issues: 1,
      suggestions: 2,
      timestamp: "1 day ago",
    },
    {
      id: 3,
      title: "Database Query Optimization",
      language: "SQL",
      status: "pending",
      score: null,
      issues: null,
      suggestions: null,
      timestamp: "2 days ago",
    },
  ]

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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Code className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold">Code Review</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="/dashboard/career" className="text-sm font-medium hover:text-primary transition-colors">
              Career
            </Link>
          </div>
        </div>
      </nav>

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance mb-2">AI-Powered Code Review</h1>
          <p className="text-muted-foreground text-pretty">
            Get instant, detailed feedback on your code with explanations and improvement suggestions.
          </p>
        </div>

        <Tabs defaultValue="submit" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="submit">Submit Code</TabsTrigger>
            <TabsTrigger value="history">Review History</TabsTrigger>
          </TabsList>

          <TabsContent value="submit" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Code Submission Form */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="h-5 w-5" />
                    <span>Submit Your Code</span>
                  </CardTitle>
                  <CardDescription>Paste your code below and get instant AI-powered feedback</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Programming Language</label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                        <SelectItem value="typescript">TypeScript</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                        <SelectItem value="cpp">C++</SelectItem>
                        <SelectItem value="sql">SQL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Code</label>
                    <Textarea
                      placeholder="Paste your code here..."
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="min-h-[300px] font-mono text-sm"
                    />
                  </div>

                  <Button onClick={handleSubmit} disabled={!code.trim() || !language || isAnalyzing} className="w-full">
                    {isAnalyzing ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing Code...
                      </>
                    ) : (
                      <>
                        <Zap className="mr-2 h-4 w-4" />
                        Analyze Code
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5" />
                    <span>Tips for Better Reviews</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Include complete, runnable code snippets</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Add comments explaining complex logic</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Select the correct programming language</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <span>Focus on specific functions or modules</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Analysis Results */}
            {showResults && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Analysis Complete</span>
                    </span>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      Score: 87/100
                    </Badge>
                  </CardTitle>
                  <CardDescription>Your code has been analyzed. Here are the findings and suggestions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Issues Found */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <span>Issues Found (2)</span>
                    </h3>

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Line 15:</strong> Potential memory leak - Event listener not removed in cleanup
                      </AlertDescription>
                    </Alert>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Line 23:</strong> Consider using const instead of let for immutable variables
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* Suggestions */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center space-x-2">
                      <Lightbulb className="h-5 w-5 text-secondary" />
                      <span>Improvement Suggestions (3)</span>
                    </h3>

                    <div className="space-y-2">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <p className="text-sm font-medium">Performance Optimization</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Use React.memo() to prevent unnecessary re-renders of this component
                        </p>
                      </div>

                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <p className="text-sm font-medium">Code Structure</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Extract the validation logic into a separate custom hook for reusability
                        </p>
                      </div>

                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <p className="text-sm font-medium">Best Practices</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Add PropTypes or TypeScript interfaces for better type safety
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Positive Feedback */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center space-x-2">
                      <Star className="h-5 w-5 text-accent" />
                      <span>What You Did Well</span>
                    </h3>

                    <div className="space-y-2">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <p className="text-sm">✓ Clean and readable code structure</p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <p className="text-sm">✓ Proper error handling implementation</p>
                      </div>
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <p className="text-sm">✓ Good use of modern JavaScript features</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="grid gap-4">
              {mockReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{review.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{review.language}</span>
                          <span>{review.timestamp}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        {review.status === "completed" ? (
                          <>
                            <div className="text-right">
                              <div className="text-sm font-medium">Score: {review.score}/100</div>
                              <div className="text-xs text-muted-foreground">
                                {review.issues} issues, {review.suggestions} suggestions
                              </div>
                            </div>
                            <Badge variant="secondary">Completed</Badge>
                          </>
                        ) : (
                          <Badge variant="outline">Pending</Badge>
                        )}
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
