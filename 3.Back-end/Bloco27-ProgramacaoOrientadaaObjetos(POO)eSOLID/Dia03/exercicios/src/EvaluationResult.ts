import Evaluation from './Evaluation';

export default class EvaluationResult {
  private _evaluation: Evaluation;

  constructor(evaluation: Evaluation, private _score: number) {
    this._evaluation = evaluation;
    this.score = _score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontuação deve ser positiva.');
    
    this._score = value;
  }
}
