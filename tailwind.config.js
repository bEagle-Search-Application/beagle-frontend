/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'neutral-50': '#F9FAFB',
				'neutral-100': '#F3F4F6',
				'neutral-200': '#E5E7EB',
				'neutral-300': '#D1D5DB',
				'neutral-400': '#9CA3AF',
				'neutral-500': '#6B7280',
				'neutral-600': '#4B5563',
				'neutral-700': '#374151',
				'neutral-800': '#1F2937',
				'neutral-900': '#111827',
				'primary-50': '#F5F4FD',
				'primary-100': '#EBE8FA',
				'primary-200': '#D7D2F5',
				'primary-300': '#C3BBF1',
				'primary-400': '#AFA5EC',
				'primary-500': '#9B8EE7',
				'primary-600': '#8074C6',
				'primary-700': '#655BA4',
				'primary-800': '#4B4183',
				'primary-900': '#302861',
				'secondary-50': '#FDF3F3',
				'secondary-100': '#FAE8E8',
				'secondary-200': '#F5D0D0',
				'secondary-300': '#F0B9B9',
				'secondary-400': '#EBA1A1',
				'secondary-500': '#E68A8A',
				'secondary-600': '#C47171',
				'secondary-700': '#A25858',
				'secondary-800': '#7F3F3F',
				'secondary-900': '#5D2626',
				'success-50': '#F0FDF4',
				'success-100': '#DCFCE7',
				'success-200': '#BBF7D0',
				'success-300': '#86EFAC',
				'success-400': '#4ADE80',
				'success-500': '#22C55E',
				'success-600': '#16A34A',
				'success-700': '#15803D',
				'success-800': '#166534',
				'success-900': '#14532D',
				'error-100': '#FEE2E2',
			},
			fontFamily: {
				helvetica: 'HELVETICA, Arial, sans-serif',
			},
		},
	},
	plugins: [],
}
