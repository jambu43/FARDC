'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, X } from 'lucide-react'
import Image from 'next/image'

interface AnimatedDropzoneProps {
    onFileAccepted: (file: File) => void
    label: string
    name: string
    previewUrl: string | null
    onRemove: () => void
    onChange: (file: File | null) => void
}

export function AnimatedDropzone({ onFileAccepted, label, name, previewUrl, onRemove, onChange }: AnimatedDropzoneProps) {
    const [isHovered, setIsHovered] = useState(false)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onFileAccepted(acceptedFiles[0])
            onChange(acceptedFiles[0])
        }
    }, [onFileAccepted, onChange])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false
    })

    if (previewUrl) {
        return (
            <div className="relative">
                <Image
                    src={previewUrl || "/placeholder.svg"}
                    alt="File preview"
                    width={400}
                    height={200}
                    className="object-cover rounded-lg"
                />
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        onRemove()
                        onChange(null)
                    }}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
                >
                    <X className="w-4 h-4 text-gray-600" />
                </button>
            </div>
        )
    }

    return (
        // @ts-ignore
        <motion.div
            {...getRootProps()}
            className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
                borderColor: isDragActive ? '#4F46E5' : isHovered ? '#6B7280' : '#E5E7EB',
                backgroundColor: isDragActive ? '#EEF2FF' : 'transparent'
            }}
        >
            <input {...getInputProps()} name={name} />
            <AnimatePresence>
                {isDragActive ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">Drop the file here...</p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">{label}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

