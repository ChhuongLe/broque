'use client'

import { useAppStore } from '@/store/store';

export default function Category () {
  const [thumbnails] = useAppStore((state)=>[
    state.thumbnails,
  ])

  return (
    <div>Category</div>
  )
}