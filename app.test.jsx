import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { App } from './src/App'

describe('test', () => {
	test('test', () => {
		render(<App />)

		expect(screen.getByText('Todo-list')).toBeInTheDocument()
	})
})
