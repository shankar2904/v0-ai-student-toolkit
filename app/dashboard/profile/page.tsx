"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import {
  User,
  ArrowLeft,
  Settings,
  Bell,
  Shield,
  Camera,
  Plus,
  X,
  Star,
  Target,
  BookOpen,
  Code,
  Save,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [newSkill, setNewSkill] = useState("")
  const [skills, setSkills] = useState([
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "React", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 75, category: "Programming" },
    { name: "Node.js", level: 60, category: "Backend" },
    { name: "CSS", level: 80, category: "Frontend" },
  ])

  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    bio: "Passionate full-stack developer with 2 years of experience. Love building user-friendly applications and learning new technologies.",
    location: "San Francisco, CA",
    github: "alexjohnson",
    linkedin: "alex-johnson-dev",
    experience: "2-3 years",
    goals: "Become a senior full-stack developer",
    interests: ["Web Development", "AI/ML", "Open Source"],
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    courseRecommendations: true,
    careerUpdates: true,
    weeklyDigest: false,
    publicProfile: true,
    showProgress: true,
  })

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, { name: newSkill, level: 50, category: "Other" }])
      setNewSkill("")
    }
  }

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index))
  }

  const updateSkillLevel = (index: number, level: number) => {
    const updatedSkills = [...skills]
    updatedSkills[index].level = level
    setSkills(updatedSkills)
  }

  const achievements = [
    {
      title: "Code Review Master",
      description: "Completed 25+ code reviews",
      icon: Code,
      earned: true,
      date: "2 weeks ago",
    },
    {
      title: "Learning Streak",
      description: "7 days of continuous learning",
      icon: BookOpen,
      earned: true,
      date: "1 week ago",
    },
    {
      title: "Skill Builder",
      description: "Added 5+ skills to profile",
      icon: Target,
      earned: true,
      date: "3 days ago",
    },
    {
      title: "Course Completionist",
      description: "Complete 10 courses",
      icon: Star,
      earned: false,
      progress: 80,
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
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <User className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold">Profile</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
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
        </div>
      </nav>

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-balance mb-2">Your Profile</h1>
          <p className="text-muted-foreground text-pretty">
            Manage your personal information, skills, and preferences to get better AI recommendations.
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Profile Card */}
              <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your profile details and bio</CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "default" : "outline"}
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </>
                    ) : (
                      "Edit Profile"
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/developer-avatar.png" />
                      <AvatarFallback className="text-lg">AJ</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Change Photo
                      </Button>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      disabled={!isEditing}
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profile.location}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level</Label>
                      <Select
                        value={profile.experience}
                        onValueChange={(value) => setProfile({ ...profile, experience: value })}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1 years">0-1 years</SelectItem>
                          <SelectItem value="2-3 years">2-3 years</SelectItem>
                          <SelectItem value="4-5 years">4-5 years</SelectItem>
                          <SelectItem value="5+ years">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub Username</Label>
                      <Input
                        id="github"
                        value={profile.github}
                        onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                        disabled={!isEditing}
                        placeholder="username"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn Profile</Label>
                      <Input
                        id="linkedin"
                        value={profile.linkedin}
                        onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                        disabled={!isEditing}
                        placeholder="profile-name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">Career Goals</Label>
                    <Textarea
                      id="goals"
                      value={profile.goals}
                      onChange={(e) => setProfile({ ...profile, goals: e.target.value })}
                      disabled={!isEditing}
                      placeholder="What are your career aspirations?"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Stats</CardTitle>
                  <CardDescription>Your learning progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Profile Completion</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="grid gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">24</div>
                      <div className="text-xs text-muted-foreground">Code Reviews</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">8</div>
                      <div className="text-xs text-muted-foreground">Courses Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">5</div>
                      <div className="text-xs text-muted-foreground">Skills Mastered</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="text-sm font-medium mb-2">Interests</div>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest) => (
                        <Badge key={interest} variant="outline" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Your Skills</span>
                  <div className="flex items-center space-x-2">
                    <Input
                      placeholder="Add new skill..."
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      className="w-40"
                      onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    />
                    <Button size="sm" onClick={addSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>Track your technical skills and proficiency levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.category}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          <Button variant="ghost" size="sm" onClick={() => removeSkill(index)} className="h-6 w-6 p-0">
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <Progress value={skill.level} className="h-2" />
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={skill.level}
                          onChange={(e) => updateSkillLevel(index, Number.parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Achievements & Badges</CardTitle>
                <CardDescription>Your learning milestones and accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon
                    return (
                      <div
                        key={index}
                        className={`p-4 border rounded-lg ${
                          achievement.earned ? "bg-primary/5 border-primary/20" : "bg-muted/30"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                              achievement.earned
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-balance">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground text-pretty">{achievement.description}</p>
                            {achievement.earned ? (
                              <p className="text-xs text-primary mt-1">Earned {achievement.date}</p>
                            ) : (
                              <div className="mt-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                  <span>Progress</span>
                                  <span>{achievement.progress}%</span>
                                </div>
                                <Progress value={achievement.progress} className="h-1" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-muted-foreground">Receive updates via email</div>
                    </div>
                    <Switch
                      checked={preferences.emailNotifications}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, emailNotifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Course Recommendations</div>
                      <div className="text-sm text-muted-foreground">Get personalized course suggestions</div>
                    </div>
                    <Switch
                      checked={preferences.courseRecommendations}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, courseRecommendations: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Career Updates</div>
                      <div className="text-sm text-muted-foreground">Career guidance and job market insights</div>
                    </div>
                    <Switch
                      checked={preferences.careerUpdates}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, careerUpdates: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Weekly Digest</div>
                      <div className="text-sm text-muted-foreground">Summary of your weekly progress</div>
                    </div>
                    <Switch
                      checked={preferences.weeklyDigest}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, weeklyDigest: checked })}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Privacy</span>
                  </CardTitle>
                  <CardDescription>Control your privacy and data sharing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Public Profile</div>
                      <div className="text-sm text-muted-foreground">Make your profile visible to others</div>
                    </div>
                    <Switch
                      checked={preferences.publicProfile}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, publicProfile: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Show Progress</div>
                      <div className="text-sm text-muted-foreground">Display your learning progress publicly</div>
                    </div>
                    <Switch
                      checked={preferences.showProgress}
                      onCheckedChange={(checked) => setPreferences({ ...preferences, showProgress: checked })}
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full bg-transparent">
                      <Settings className="h-4 w-4 mr-2" />
                      Advanced Privacy Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
