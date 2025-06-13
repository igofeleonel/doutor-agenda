"use client";

import { Stethoscope } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface Doctor {
  id: string;
  name: string;
  avatarImageUrl: string | null;
  specialty: string;
  appointments: number;
}

interface TopDoctorsProps {
  doctors: Doctor[];
}

export default function TopDoctors({ doctors }: TopDoctorsProps) {
  return (
    <Card className="mx-auto w-full">
      <CardContent>
        <div className="flex items-center gap-2">
          <Stethoscope className="text-muted-foreground" />
          <CardTitle className="text-base">Médicos</CardTitle>
        </div>
      </CardContent>

      <div className="divide-y">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={doctor.avatarImageUrl ?? undefined}
                  alt={doctor.name}
                />
                <AvatarFallback>
                  {doctor.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <h3 className="font-medium">{doctor.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {doctor.specialty}
                </p>
              </div>
            </div>

            <div className="text-muted-foreground text-sm font-medium">
              {doctor.appointments} agend.
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
