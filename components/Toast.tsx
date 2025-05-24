"use client;"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa"

type ToastProps = {
  toast: {
    status: boolean
    type: "success" | "error" | ""
    message?: string
  }
  setToast: React.Dispatch<React.SetStateAction<{
    status: boolean
    type: "success" | "error" | ""
    message?: string
  }>>
  autoClose?: number | false
}

const Toast = ({ toast, setToast, autoClose = 5000 }: ToastProps) => {
  // Close toast after delay if autoClose is enabled
  useEffect(() => {
    if (toast.status && autoClose) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, status: false }))
      }, autoClose)
      return () => clearTimeout(timer)
    }
  }, [toast.status, autoClose, setToast])

  const isSuccess = toast.type === "success"
  const bgColor = isSuccess ? "bg-green-100" : "bg-red-100"
  const borderColor = isSuccess ? "border-green-400" : "border-red-400"
  const textColor = isSuccess ? "text-green-800" : "text-red-800"
  const icon = isSuccess ? <FaCheckCircle className="text-xl" /> : <FaTimesCircle className="text-xl" />

  return (
    <AnimatePresence>
      {toast.status && (
        <motion.div
          key="toast"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`fixed top-4 right-4 z-50 border-l-4 ${borderColor} ${bgColor} p-4 rounded-lg shadow-lg max-w-xs md:max-w-sm`}
        >
          <div className="flex items-start font-gilroy">
            <span className={`${textColor} mr-3 mt-0.5`}>{icon}</span>
            <div className="flex-1">
              <p className={`font-gilroy font-bold ${textColor}`}>
                {isSuccess ? "Yeei!" : "Oops!"}
              </p>
              <p className={`font-gilroy text-sm ${textColor}`}>
                {toast.message || (isSuccess 
                  ? "Action completed successfully!" 
                  : "Something went wrong.")}
              </p>
            </div>
            <button
              onClick={() => setToast(prev => ({ ...prev, status: false }))}
              className={`ml-4 ${textColor} hover:opacity-70 transition-opacity`}
              aria-label="Close toast"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast