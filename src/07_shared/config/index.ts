const getEnvVar = (key: string): string => {
    if(process.env[key] === undefined) {
        throw new Error(`Environment variable ${key} is required`)
    }
    return process.env[key] || '';
}

// API Entrypoint
export const API_URL = getEnvVar("REACT_APP_API_URL")

// Start
export const NODE_ENV = getEnvVar("NODE_ENV")

// Development
export const isDevEnv = NODE_ENV === 'development'

// Production
export const isProdEnv = NODE_ENV === 'production'