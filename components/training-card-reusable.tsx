import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader as DialogHeaderUI,
    DialogTitle as DialogTitleUI,
    DialogDescription as DialogDescriptionUI,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { JSX } from "react"

interface TrainingCardProps {
    title: string
    description: string
    icon: JSX.Element
    details: string[]
    modalContent: JSX.Element
}

export default function TrainingCard({
    title,
    description,
    icon,
    details,
    modalContent,
}: TrainingCardProps) {
    return (
        <Dialog>
            <Card className="flex flex-col h-full border-sky-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-1 bg-gradient-to-r from-sky-400 to-azure-500"></div>
                <div className="flex flex-col flex-grow">
                    <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-azure-600 flex items-center justify-center mb-4">
                            {icon}
                        </div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-grow">
                        <ul className="space-y-2 text-sm">
                            {details.map((item, idx) => (
                                <li key={idx} className="flex items-center">
                                    <ChevronRight className="h-4 w-4 mr-2 text-sky-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardContent>              
                </div>
            </Card>
        </Dialog>
    )
}