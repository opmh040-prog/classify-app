import { SubjectCard } from "@/components/SubjectCard";
import { SemesterSelector } from "@/components/SemesterSelector";
import { GraduationCap, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const subjects = [
  {
    title: "Data Structures & Algorithms",
    code: "CS 301",
    credits: 4,
    professor: "Dr. Sarah Chen",
    notesCount: 24,
    videoCount: 18,
    paperCount: 8,
    color: "bg-gradient-to-b from-blue-500 to-blue-600",
  },
  {
    title: "Database Management Systems",
    code: "CS 345",
    credits: 3,
    professor: "Prof. Michael Rodriguez",
    notesCount: 19,
    videoCount: 15,
    paperCount: 6,
    color: "bg-gradient-to-b from-purple-500 to-purple-600",
  },
  {
    title: "Software Engineering",
    code: "CS 320",
    credits: 4,
    professor: "Dr. Emily Johnson",
    notesCount: 31,
    videoCount: 22,
    paperCount: 12,
    color: "bg-gradient-to-b from-green-500 to-green-600",
  },
  {
    title: "Computer Networks",
    code: "CS 441",
    credits: 3,
    professor: "Prof. David Kim",
    notesCount: 16,
    videoCount: 14,
    paperCount: 5,
    color: "bg-gradient-to-b from-orange-500 to-orange-600",
  },
  {
    title: "Machine Learning",
    code: "CS 485",
    credits: 4,
    professor: "Dr. Lisa Thompson",
    notesCount: 28,
    videoCount: 20,
    paperCount: 10,
    color: "bg-gradient-to-b from-red-500 to-red-600",
  },
  {
    title: "Operating Systems",
    code: "CS 372",
    credits: 4,
    professor: "Prof. James Wilson",
    notesCount: 23,
    videoCount: 16,
    paperCount: 9,
    color: "bg-gradient-to-b from-indigo-500 to-indigo-600",
  },
];

const Index = () => {
  const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);
  const totalResources = subjects.reduce((sum, subject) => 
    sum + subject.notesCount + subject.videoCount + subject.paperCount, 0);

  return (
    <div className="min-h-screen bg-[var(--gradient-soft)] p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-3 rounded-full bg-[var(--gradient-primary)] text-white">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Classify</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your academic hub for notes, paper strategies, and video resources organized by semester
          </p>
        </div>

        {/* Stats and Semester Selector */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-wrap gap-4">
            <Card className="bg-card/60 backdrop-blur border-border/50">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{subjects.length}</div>
                  <div className="text-sm text-muted-foreground">Subjects</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur border-border/50">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="p-2 rounded-lg bg-accent/60">
                  <TrendingUp className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{totalCredits}</div>
                  <div className="text-sm text-muted-foreground">Total Credits</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/60 backdrop-blur border-border/50">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="p-2 rounded-lg bg-secondary/70">
                  <Clock className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{totalResources}</div>
                  <div className="text-sm text-muted-foreground">Resources</div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <SemesterSelector />
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <SubjectCard key={subject.code} {...subject} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            Stay organized, study smart, and excel in your academics with Classify
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;