import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Code,
  BookOpen,
  TrendingUp,
  Upload,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Target,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Code className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold">AI Student Toolkit</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/dashboard/code-review" className="text-sm font-medium hover:text-primary transition-colors">
              Code Review
            </Link>
            <Link href="/dashboard/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="/dashboard/career" className="text-sm font-medium hover:text-primary transition-colors">
              Career
            </Link>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </nav>

      <div className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance mb-2">Welcome back, Developer!</h1>
          <p className="text-muted-foreground text-pretty">
            Track your progress and continue your learning journey with AI-powered insights.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Code Reviews</CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+3 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">2 in progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skill Level</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Intermediate</div>
              <p className="text-xs text-muted-foreground">JavaScript, React</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Career Match</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Frontend Developer</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Features Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mb-8">
          {/* Code Review Section */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Code Review</CardTitle>
                    <CardDescription>Get instant AI feedback</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Recent Reviews</span>
                  <Badge variant="secondary">3 pending</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>React Component - Fixed</span>
                    <Badge variant="outline" className="ml-auto">
                      2h ago
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>API Integration - Pending</span>
                    <Badge variant="outline" className="ml-auto">
                      1d ago
                    </Badge>
                  </div>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href="/dashboard/code-review">
                  <Upload className="mr-2 h-4 w-4" />
                  Submit Code for Review
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Course Recommendations */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Recommended Courses</CardTitle>
                    <CardDescription>Personalized for you</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary/10 text-secondary">
                    <Star className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Advanced React Patterns</p>
                    <p className="text-xs text-muted-foreground">Based on your React skills</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-secondary/10 text-secondary">
                    <Star className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">TypeScript Fundamentals</p>
                    <p className="text-xs text-muted-foreground">Strengthen your foundation</p>
                  </div>
                </div>
              </div>
              <Button variant="secondary" className="w-full" asChild>
                <Link href="/dashboard/courses">
                  View All Recommendations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Career Guidance */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Career Insights</CardTitle>
                    <CardDescription>Your path forward</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Frontend Developer Match</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Full-Stack Developer</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Lightbulb className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">Next Step</span>
                </div>
                <p className="text-xs text-muted-foreground">Learn Node.js to boost your full-stack potential</p>
              </div>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/dashboard/career">
                  Explore Career Paths
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>Your learning progress over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Code className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Code review completed for React component</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <Badge variant="secondary">Completed</Badge>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Started "Advanced React Patterns" course</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
                <Badge variant="outline">In Progress</Badge>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Career assessment updated</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
                <Badge variant="secondary">Updated</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
