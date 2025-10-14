import { spawn } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

const testsDir = __dirname;
const testFiles = fs.readdirSync(testsDir)
    .filter(file => file.endsWith('.ts') && file !== 'run-all.ts')
    .sort();

console.log(`Found ${testFiles.length} test files\n`);

let passed = 0;
let failed = 0;
const failedTests: string[] = [];

async function runTest(testFile: string): Promise<boolean> {
    return new Promise((resolve) => {
        console.log(`\n${'='.repeat(60)}`);
        console.log(`Running: ${testFile}`);
        console.log('='.repeat(60));

        const testPath = path.join(testsDir, testFile);
        const child = spawn('npx', ['ts-node', testPath], {
            stdio: 'inherit',
            shell: true,
            cwd: path.join(testsDir, '../..')
        });

        child.on('close', (code) => {
            if (code === 0) {
                console.log(`✓ ${testFile} passed`);
                resolve(true);
            } else {
                console.log(`✗ ${testFile} failed with code ${code}`);
                resolve(false);
            }
        });

        child.on('error', (err) => {
            console.error(`Error running ${testFile}:`, err);
            resolve(false);
        });
    });
}

async function runAllTests() {
    for (const testFile of testFiles) {
        const success = await runTest(testFile);
        if (success) {
            passed++;
        } else {
            failed++;
            failedTests.push(testFile);
        }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log('Test Results');
    console.log('='.repeat(60));
    console.log(`Total: ${testFiles.length}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);

    if (failedTests.length > 0) {
        console.log('\nFailed tests:');
        failedTests.forEach(test => console.log(`  - ${test}`));
    }

    console.log('='.repeat(60));

    process.exit(failed > 0 ? 1 : 0);
}

runAllTests();
