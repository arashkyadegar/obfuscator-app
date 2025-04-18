const visitedNodes = new Set();

export const traverseAST = (node: any, callback: (node: any) => void) => {
    if (node && node.type && !visitedNodes.has(node)) {
        visitedNodes.add(node); // Mark node as visited
        callback(node);
    }

    Object.keys(node).forEach((key) => {
        const child = node[key];
        if (Array.isArray(child)) {
            child.forEach((subNode) => {
                if (subNode && typeof subNode === "object") {
                    traverseAST(subNode, callback);
                }
            });
        } else if (child && typeof child === "object") {
            traverseAST(child, callback);
        }
    });
};