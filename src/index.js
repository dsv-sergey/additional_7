module.exports = function solveSudoku(matrix) {
    // your solution
    let i, j, b, k;
  
    for (i = 0; i <= matrix.length - 1; i++) {
        for (j = 0; j <= matrix[i].length - 1; j++) {
            if (!matrix[i][j]) {
                for (k = 1; k <= 9; k++) {
                    if (insert(matrix, i, j, k)) {
                        matrix[i][j] = k;
                        b = solveSudoku(matrix);
                        if (b) { return matrix; }
                        matrix[i][j] = 0;
                    }
                }
                return false;
            }
        }
    } 
    return true;

    function insert(matrix, i, j, k) {
        let a, b;
        for (a = 0; a <= 8; a++) {
            if (a != i && matrix[a][j] == k) {
                return false;
            }
        }
        for (a = 0; a <= 8; a++) {
            if (a != j && matrix[i][a] == k) {
                return false;
            }
        }
        let y = Math.floor(i / 3) * 3;
        let x = Math.floor(j / 3) * 3;
        for (a = 0; a < 3; a++) {
            for (b = 0; b < 3; b++) {
                if (a != i && b != j && matrix[y + a][x + b] == k) {
                    return false;
                }
            }
        }
        return true;
    }
}
