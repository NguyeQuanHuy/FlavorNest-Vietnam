'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Recipe } from '@/data/mockRecipes'

interface RecipeCardProps {
  recipe: Recipe
  index?: number
}

export default function RecipeCard({ recipe, index = 0 }: RecipeCardProps) {
  const totalMinutes = recipe.prepTime + recipe.cookTime
  const timeLabel =
    totalMinutes < 60
      ? `${totalMinutes} min`
      : `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60 > 0 ? `${totalMinutes % 60}m` : ''}`

  const difficultyColor: Record<string, string> = {
    Easy: '#16a34a',
    Medium: '#D97706',
    Hard: '#dc2626',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
    >
      <Link href={`/recipes/${recipe.slug}`} className="group block">
        <div
          style={{
            background: '#fff',
            border: '1px solid #e8e0d6',
            borderRadius: 2,
            overflow: 'hidden',
            transition: 'box-shadow 0.25s ease, transform 0.25s ease',
          }}
          className="group-hover:shadow-lg group-hover:-translate-y-0.5"
        >
          {/* Image */}
          <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#F5EDE3' }}>
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
              className="group-hover:scale-105"
            />

            {/* Badges */}
            <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
              {recipe.featured && (
                <span
                  style={{
                    background: '#D97706',
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  Featured
                </span>
              )}
              {recipe.new && (
                <span
                  style={{
                    background: '#2D1A0E',
                    color: '#F5EDE3',
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                    fontFamily: 'var(--font-dm-sans)',
                  }}
                >
                  New
                </span>
              )}
            </div>

            {/* Category pill */}
            <div style={{ position: 'absolute', bottom: 12, right: 12 }}>
              <span
                style={{
                  background: 'rgba(245,237,227,0.92)',
                  color: '#4B2E1A',
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-dm-sans)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {recipe.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '18px 20px 20px' }}>
            {/* Rating + difficulty */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ color: '#D97706', fontSize: 12, letterSpacing: 1 }}>★★★★★</span>
                <span style={{ fontSize: 12, color: '#9b8c7e', fontFamily: 'var(--font-dm-sans)' }}>
                  {recipe.rating} ({recipe.reviewCount.toLocaleString()})
                </span>
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: difficultyColor[recipe.difficulty],
                  fontFamily: 'var(--font-dm-sans)',
                  letterSpacing: '0.05em',
                }}
              >
                {recipe.difficulty}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 20,
                fontWeight: 600,
                color: '#2D1A0E',
                lineHeight: 1.25,
                marginBottom: 6,
              }}
            >
              {recipe.title}
            </h3>
            <p
              style={{
                fontSize: 12,
                color: '#D97706',
                fontFamily: 'var(--font-dm-sans)',
                marginBottom: 10,
                fontStyle: 'italic',
              }}
            >
              {recipe.titleVi}
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: 13,
                color: '#7a6a5e',
                lineHeight: 1.65,
                fontFamily: 'var(--font-dm-sans)',
                marginBottom: 16,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {recipe.description}
            </p>

            {/* Footer meta */}
            <div
              style={{
                borderTop: '1px solid #f0e8df',
                paddingTop: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#F5EDE3',
                    border: '1px solid #D97706',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 9,
                    fontWeight: 600,
                    color: '#4B2E1A',
                    letterSpacing: '0.05em',
                    fontFamily: 'var(--font-dm-sans)',
                    flexShrink: 0,
                  }}
                >
                  {recipe.authorAvatar}
                </div>
                <span style={{ fontSize: 12, color: '#9b8c7e', fontFamily: 'var(--font-dm-sans)' }}>
                  {recipe.author}
                </span>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#4B2E1A',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    {timeLabel}
                  </div>
                  <div style={{ fontSize: 10, color: '#b8a898', fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Total
                  </div>
                </div>
                <div style={{ width: 1, height: 24, background: '#e8e0d6' }} />
                <div style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#4B2E1A',
                      fontFamily: 'var(--font-dm-sans)',
                    }}
                  >
                    {recipe.servings}
                  </div>
                  <div style={{ fontSize: 10, color: '#b8a898', fontFamily: 'var(--font-dm-sans)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Serves
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
