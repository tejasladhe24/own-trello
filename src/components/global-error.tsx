import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "./ui/button"
import type { ErrorComponentProps } from "@tanstack/react-router"

export const GlobalError = (props: ErrorComponentProps) => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>500 - Interval Server Error</EmptyTitle>
        <EmptyDescription>{props.error.message}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Go To Home</Button>
        <EmptyDescription>
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}
