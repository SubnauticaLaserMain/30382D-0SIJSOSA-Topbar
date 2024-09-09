import { version } from './Version.js';

export function throwNewError(message) {
    try {
        throw new Error(message);  // Simulate the error
    } catch (error) {
        // Split the stack trace into lines
        const stackLines = error.stack.split("\n");
        let string = ''
        
        string += (`[API:${version}] Error: ${message}\n`);
        string += ("Stack Begin\n");

        // Iterate over all lines in the stack trace and extract relevant info
        stackLines.forEach((line, index) => {
            if (!(index == 0 || index == 1)) {
                const trimmedLine = line.trim();

                // Match the location with the full URL, line, and column number
                let locationMatch = trimmedLine.match(/\((http[^\s]+)\)/);  // Capture the full URL

                if (!locationMatch) {
                    // Fallback in case no parentheses: match URL without parentheses
                    locationMatch = trimmedLine.match(/(http[^\s]+)/);
                }

                // Extract function name if available (before the URL)
                let functionNameMatch = trimmedLine.match(/^at ([^\s]+)/);

                if (locationMatch) {
                    const scriptInfo = locationMatch[1];

                    // Extract the URL, line, and column information from the match
                    const urlParts = scriptInfo.match(/(.+\.js):(\d+):(\d+)/);

                    if (urlParts) {
                        const scriptPath = urlParts[1]; // URL path to the .js file
                        const scriptLine = urlParts[2]; // Line number
                        const scriptColumn = urlParts[3]; // Column number

                        const functionName = functionNameMatch ? functionNameMatch[1] : "anonymous function";
                        let isAfunction = true;

                        if (functionName.includes('://')) {
                            isAfunction = false;
                        }

                        if (isAfunction == true) {

                            // Log each line of the stack trace with script path, line number, and function name
                            string += (`Script '${scriptPath}', Line ${scriptLine}, Column ${scriptColumn} - function ${functionName};\n`);
                        } else {
                            // Log each line of the stack trace with script path and line number
                            string += (`Script '${scriptPath}', Line ${scriptLine}, Column ${scriptColumn};\n`);
                        }
                    }
                } else {
                    // Fallback: log the entire stack trace line if parsing fails
                    string += (trimmedLine + '\n');
                }
            }
        });

        string += ("Stack End");

        console.warn(string)
    }
}
