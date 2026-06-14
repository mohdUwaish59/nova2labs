"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { X, Plus, ArrowRight, Bot, Code2, Cloud, Calendar, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedOrb } from "./AnimatedOrb"
import { ServiceCard } from "./ServiceCard"
import { QuickActionButtons } from "./QuickActionButtons"
import { ContactForm } from "./ContactForm"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: number
  text: string
  isUser: boolean
  component?: React.ReactNode
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "👋 Welcome to nova2labs! We help businesses leverage AI, build scalable infrastructure, and develop custom software solutions.", 
      isUser: false 
    },
    {
      id: 2,
      text: "How can we assist you today?",
      isUser: false,
      component: (
        <QuickActionButtons 
          actions={[
            { 
              icon: Bot, 
              label: "View Services", 
              onClick: () => handleQuickAction("services") 
            },
            { 
              icon: Calendar, 
              label: "Get Quote", 
              onClick: () => handleQuickAction("quote") 
            },
            { 
              icon: Mail, 
              label: "Contact Us", 
              onClick: () => handleQuickAction("contact") 
            },
            { 
              icon: Phone, 
              label: "Book Call", 
              onClick: () => handleQuickAction("call") 
            },
          ]}
        />
      )
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-WbfFaH8Y88MyCuFrnh3hBIxabYIsBT.mp3")
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      setIsExpanded(true)
      const contentTimer = setTimeout(() => setShowContent(true), 1000)
      return () => {
        clearTimeout(contentTimer)
      }
    } else {
      setShowContent(false)
      const collapseTimer = setTimeout(() => {
        setIsExpanded(false)
      }, 150)
      return () => {
        clearTimeout(collapseTimer)
      }
    }
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
    }

    setMessages((prev) => [...prev, newMessage])
    setInputValue("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Thank you for your message! Our team will get back to you shortly. You can also email us at contact@nova2labs.com",
          isUser: false,
        },
      ])
    }, 1000)
  }

  const handleQuickAction = (action: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: action === "services" ? "I'd like to see your services" :
            action === "quote" ? "I need a quote for my project" :
            action === "contact" ? "I want to get in touch" :
            "I'd like to schedule a call",
      isUser: true,
    }

    setMessages((prev) => [...prev, userMessage])

    setTimeout(() => {
      if (action === "services") {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "Here are our core services:",
            isUser: false,
          },
          {
            id: Date.now() + 2,
            text: "",
            isUser: false,
            component: (
              <ServiceCard
                icon={Bot}
                title="AI Solutions"
                description="Custom AI integration, chatbots, and automation"
                features={["AI Chatbots", "Machine Learning", "Data Analysis", "Automation"]}
                priceRange="Starting at $5,000"
              />
            ),
          },
          {
            id: Date.now() + 3,
            text: "",
            isUser: false,
            component: (
              <ServiceCard
                icon={Cloud}
                title="Cloud Infrastructure"
                description="Scalable cloud solutions and DevOps services"
                features={["AWS/Azure Setup", "CI/CD Pipelines", "Monitoring", "Security"]}
                priceRange="Starting at $3,000"
              />
            ),
          },
          {
            id: Date.now() + 4,
            text: "",
            isUser: false,
            component: (
              <ServiceCard
                icon={Code2}
                title="Custom Development"
                description="Full-stack web and mobile applications"
                features={["Web Apps", "Mobile Apps", "APIs", "Integrations"]}
                priceRange="Starting at $8,000"
              />
            ),
          },
        ])
      } else if (action === "contact") {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "Please fill out this form and we'll get back to you within 24 hours:",
            isUser: false,
          },
          {
            id: Date.now() + 2,
            text: "",
            isUser: false,
            component: (
              <ContactForm
                onSubmit={(data) => {
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: Date.now() + 5,
                      text: `✓ Thank you, ${data.name}! We've received your inquiry and will contact you at ${data.email} shortly.`,
                      isUser: false,
                    },
                  ])
                }}
              />
            ),
          },
        ])
      } else if (action === "quote") {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "We'd love to provide a quote! Please share some details about your project:",
            isUser: false,
          },
          {
            id: Date.now() + 2,
            text: "",
            isUser: false,
            component: (
              <ContactForm
                onSubmit={(data) => {
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: Date.now() + 5,
                      text: `✓ Thanks! We'll review your project details and send a detailed quote to ${data.email} within 24 hours.`,
                      isUser: false,
                    },
                  ])
                }}
              />
            ),
          },
        ])
      } else if (action === "call") {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "Great! Please provide your contact details and preferred time, and we'll schedule a call:",
            isUser: false,
          },
          {
            id: Date.now() + 2,
            text: "",
            isUser: false,
            component: (
              <ContactForm
                onSubmit={(data) => {
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: Date.now() + 5,
                      text: `✓ Perfect! We'll send you a calendar invite at ${data.email} to schedule our call.`,
                      isUser: false,
                    },
                  ])
                }}
              />
            ),
          },
        ])
      }
    }, 800)
  }

  const widgetWidth = typeof window !== "undefined" && window.innerWidth < 768 ? window.innerWidth - 32 : 320
  const orbTargetX = -(widgetWidth - 16 - 20 - 32)
  const orbTargetY = -(562.5 - 16 - 20 - 32)
  const orbTargetScale = 40 / 64

  const handleOrbClick = () => {
    if (!isOpen) {
      audioRef.current?.play()
      setIsOpen(true)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 md:right-6 md:bottom-6 max-md:right-4 max-md:bottom-4 z-50">
      <div
        className="absolute bottom-0 right-0 z-30 cursor-pointer"
        style={{
          transition: isOpen
            ? "transform 1s cubic-bezier(0.22, 1, 0.36, 1)"
            : "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          transform: isExpanded
            ? `translate3d(${orbTargetX}px, ${orbTargetY}px, 0) scale(${orbTargetScale})`
            : "translate3d(0, 0, 0) scale(1)",
          transformOrigin: "center center",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
        onClick={handleOrbClick}
      >
        <AnimatedOrb size={64} />
      </div>

      <div
        className={cn(
          "bg-zinc-50 overflow-hidden flex flex-col origin-bottom-right",
          isExpanded ? "rounded-3xl max-md:rounded-2xl" : "rounded-[100px]",
        )}
        style={{
          width: isExpanded ? widgetWidth : 64,
          height: isExpanded ? 562.5 : 64,
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          transition: isOpen
            ? "width 1s cubic-bezier(0.22, 1, 0.36, 1), height 1s cubic-bezier(0.22, 1, 0.36, 1), border-radius 1s cubic-bezier(0.22, 1, 0.36, 1)"
            : "width 0.8s cubic-bezier(0.22, 1, 0.36, 1), height 0.8s cubic-bezier(0.22, 1, 0.36, 1), border-radius 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "width, height",
          backfaceVisibility: "hidden",
        }}
      >
        <div
          className={cn("flex flex-col h-full", showContent ? "opacity-100" : "opacity-0")}
          style={{
            transition: "opacity 150ms ease-out",
            willChange: "opacity",
          }}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none h-24">
            <div
              className={cn(
                "absolute inset-0 overflow-hidden",
                isExpanded ? "rounded-3xl max-md:rounded-2xl" : "rounded-[100px]",
              )}
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)",
                transition: isOpen
                  ? "border-radius 1s cubic-bezier(0.22, 1, 0.36, 1)"
                  : "border-radius 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />

            {/* Content */}
            <div className="relative p-4 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white">
                  <img 
                    src="/logo.webp" 
                    alt="nova2labs" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-zinc-950">nova2labs</h3>
                  <p className="text-xs text-zinc-600">AI & Engineering Solutions</p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(false)
                }}
                className="w-8 h-8 rounded-full hover:bg-zinc-200/50 flex items-center justify-center transition-colors bg-zinc-100"
              >
                <X className="w-5 h-5 text-zinc-700" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 pt-20 space-y-3 bg-zinc-50 scrollbar-none">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={cn(
                    "flex",
                    message.component ? "justify-stretch" : message.isUser ? "justify-end" : "justify-start",
                  )}
                >
                  {message.component ? (
                    <div className="w-full">{message.component}</div>
                  ) : (
                    <div
                      className={cn(
                        "inline-block max-w-[80%] p-3 rounded-2xl text-sm break-words",
                        message.isUser
                          ? "bg-zinc-100 text-zinc-950 rounded-br-sm"
                          : "bg-card text-card-foreground rounded-bl-sm",
                      )}
                      style={{
                        boxShadow:
                          "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
                      }}
                    >
                      {message.text}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-card border-t border-border shrink-0 border-none">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Write a message..."
                className="flex-1 bg-muted rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
              <button
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 transition-colors"
                onClick={() => console.log("Plus button clicked")}
              >
                <Plus className="w-5 h-5 text-zinc-700" />
              </button>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-zinc-200 transition-colors bg-blue-500"
                onClick={handleSend}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
