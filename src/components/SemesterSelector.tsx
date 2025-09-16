import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ChevronDown } from "lucide-react";

const semesters = [
  { id: "fall-2024", label: "Fall 2024", current: true },
  { id: "spring-2024", label: "Spring 2024", current: false },
  { id: "fall-2023", label: "Fall 2023", current: false },
];

export function SemesterSelector() {
  const [selectedSemester, setSelectedSemester] = useState("fall-2024");
  
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Calendar className="w-5 h-5" />
        <span className="text-sm font-medium">Semester:</span>
      </div>
      
      <Select value={selectedSemester} onValueChange={setSelectedSemester}>
        <SelectTrigger className="w-40 bg-card border-border/50 hover:border-primary/30 transition-colors">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {semesters.map((semester) => (
            <SelectItem key={semester.id} value={semester.id}>
              <div className="flex items-center gap-2">
                {semester.label}
                {semester.current && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary/10 text-primary rounded">
                    Current
                  </span>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}