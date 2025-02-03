"use client"

import * as React from "react"
import { addDays, format, Locale as dateFnsLocale } from "date-fns"
import { fr } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function DateRangePicker({
    className,
    onDateRangeChange,
}: React.HTMLAttributes<HTMLDivElement> & {
    onDateRangeChange: (range: DateRange | undefined) => void
}) {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 7),
    })

    React.useEffect(() => {
        onDateRangeChange(date)
    }, [date, onDateRangeChange])

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    <span className="text-white bg-primary rounded px-1">
                                        {format(date.from, "LLL dd, y", { locale: fr })}
                                    </span>
                                    <span> - </span>
                                    <span className="text-white bg-primary rounded px-1">
                                        {format(date.to, "LLL dd, y", { locale: fr })}
                                    </span>
                                </>
                            ) : (
                                <span className="text-white bg-primary rounded px-1">
                                    {format(date.from, "LLL dd, y", { locale: fr })}
                                </span>
                            )
                        ) : (
                            <span>Sélectionnez une plage de dates</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                        locale={fr}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

