import { BookOpen, FileText, Play, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SubjectCardProps {
  title: string;
  code: string;
  credits: number;
  professor: string;
  notesCount: number;
  videoCount: number;
  paperCount: number;
  color: string;
}

export function SubjectCard({
  title,
  code,
  credits,
  professor,
  notesCount,
  videoCount,
  paperCount,
  color,
}: SubjectCardProps) {
  return (
    <Card className="group hover:shadow-[var(--shadow-elevated)] transition-all duration-300 bg-gradient-to-br from-card to-primary-soft/20 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs font-medium">
                {code}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {credits} Credits
              </span>
            </div>
          </div>
          <div className={`w-3 h-12 rounded-full ${color}`} />
        </div>
        <p className="text-sm text-muted-foreground">{professor}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-accent/50 to-accent/30">
            <FileText className="w-4 h-4 text-accent-primary" />
            <div className="text-center">
              <div className="text-lg font-semibold text-accent-foreground">{notesCount}</div>
              <div className="text-xs text-accent-foreground/80">Notes</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-primary-soft to-primary/10">
            <Play className="w-4 h-4 text-primary" />
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">{videoCount}</div>
              <div className="text-xs text-primary/80">Videos</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-secondary/70 to-secondary/50">
            <BookOpen className="w-4 h-4 text-secondary-foreground" />
            <div className="text-center">
              <div className="text-lg font-semibold text-secondary-foreground">{paperCount}</div>
              <div className="text-xs text-secondary-foreground/80">Papers</div>
            </div>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full justify-between group-hover:bg-primary-soft/50 transition-colors"
        >
          <span>Access Resources</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}