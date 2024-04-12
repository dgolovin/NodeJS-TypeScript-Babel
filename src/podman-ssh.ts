import { spawn } from 'node:child_process';

function consoleOut(out: any): void {
    console.log(out.toString())
}

export function runPodman() {
    const podmanProcess = spawn(
        'podman',
        [
            'machine',
            'ssh',
            'mkdir -p /etc/rhsm/facts/ && echo {\\"property\\":\\"value\\"} | sudo tee /etc/rhsm/facts/pd-redhat-account-ext.facts',
        ],
        {
            env: process.env
        }
    );
    podmanProcess.stdout.on('data', consoleOut);
    podmanProcess.stderr.on('data', consoleOut);
}