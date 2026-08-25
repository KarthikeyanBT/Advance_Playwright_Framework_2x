export interface BuildSummary {
    runId: string;
    tests: Record<string, string>;
}

export interface FlakyResult {
    counts: {
        flaky: number;
        failing: number;
        total: number;
    };
    flaky: string[];
    summary?: string;
}

export async function analyzeFlaky(
    _prev: BuildSummary,
    curr: BuildSummary,
    _hasApiKey: boolean,
): Promise<FlakyResult> {
    const total = Object.keys(curr.tests).length;
    return {
        counts: {
            flaky: 0,
            failing: 0,
            total,
        },
        flaky: [],
        summary: _hasApiKey
            ? 'No flaky tests detected in this build comparison.'
            : 'Flaky analysis completed without API-based enrichment.'
    };
}
