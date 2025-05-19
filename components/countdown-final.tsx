"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function CountdownFinal() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isClient, setIsClient] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Set target date to June 30, 2025
    const targetDate = new Date("2025-06-13T00:00:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  if (!isClient) {
    return null
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 opacity-90"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-8 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image src="/images/logo.png" alt="Since24 Logo" width={180} height={80} className="h-auto w-auto" />
              <motion.div
                className="absolute -inset-4 rounded-full opacity-50"
                animate={{
                  boxShadow: [
                    "0 0 20px 10px rgba(255,255,255,0.1)",
                    "0 0 30px 15px rgba(255,255,255,0.2)",
                    "0 0 20px 10px rgba(255,255,255,0.1)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white text-center mb-4 md:mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Something Exciting is Coming
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 text-center max-w-2xl mb-8 md:mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're preparing something special for you. Stay tuned and get ready for the big reveal!
          </motion.p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 w-full max-w-4xl">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                className="flex flex-col items-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="relative">
                  <motion.div
                    className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-3 md:p-4 w-full aspect-square flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        className="text-3xl md:text-6xl font-bold text-white"
                        key={unit.value}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {unit.value.toString().padStart(2, "0")}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    className="absolute -inset-1 rounded-2xl opacity-30 z-0"
                    animate={{
                      boxShadow: [
                        "0 0 10px 5px rgba(255,255,255,0.1)",
                        "0 0 15px 7px rgba(255,255,255,0.15)",
                        "0 0 10px 5px rgba(255,255,255,0.1)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  />
                </div>
                <span className="text-white/80 text-sm md:text-xl mt-2 md:mt-3 font-medium">{unit.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
