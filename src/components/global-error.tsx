import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "./ui/button"
import { useNavigate, type ErrorComponentProps } from "@tanstack/react-router"
import { env } from "@/env"

export const GlobalError = (props: ErrorComponentProps) => {
  const navigate = useNavigate()

  const goToHome = () => navigate({ to: "/" })

  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>500 - Internal Server Error</EmptyTitle>
        <EmptyDescription>
          {env.NODE_ENV === "development"
            ? props.error.message
            : "Something went wrong. Please try again."}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" onClick={goToHome}>
          Go To Home
        </Button>
        <EmptyDescription>
          {/* TODO: Add Contact support page and url here */}
          Need help? <a href="#">Contact support</a>
        </EmptyDescription>
      </EmptyContent>
    </Empty>
  )
}
