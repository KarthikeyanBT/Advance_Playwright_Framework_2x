export type RcaSeverity = 'Low' | 'Medium' | 'High';
export type RcaPriority = 'P0' | 'P1' | 'P2';

export interface RcaVerdict {
    severity: RcaSeverity;
    priority: RcaPriority;
    rootCause: string;
    fixes: string[];
}

export interface FailureContext {
    title: string;
    file: string;
    error: string;
    stack?: string;
}

export async function analyzeFailure(_context: FailureContext): Promise<RcaVerdict> {
    return {
        severity: 'Medium',
        priority: 'P1',
        rootCause: 'A test failure occurred. Investigate the failing step and assertions in the relevant page or API flow.',
        fixes: [
            'Review the failing assertion and expected state.',
            'Confirm the target page or API response matches the expected contract.',
            'Add a more stable wait or assertion for the UI state under test.'
        ]
    };
}
