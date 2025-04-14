import { Message } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface MessageCardProps {
  message: Message;
}

export function MessageCard({ message }: MessageCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{message.owner_id}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{message.content}</CardDescription>
      </CardContent>
    </Card>
  );
}
