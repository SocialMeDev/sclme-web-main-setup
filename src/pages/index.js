import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Alert status="success">
        <AlertIcon />
        <AlertTitle>Home!</AlertTitle>
        <AlertDescription>Setup with Nextjs and Chakra UI.</AlertDescription>
      </Alert>
    </div>
  )
}
