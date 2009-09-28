/*!
 * @include "_InternalClasses.js"
 */

/**
 * �쐬����CategoryList����AURL�������A�X������������B�����Ώۂ́A�擾�ς݂̔ꗗ�̌��s�X��
 * ����ю擾�ς݂̉ߋ����O�ŁA�������X��URL�ł����Ă��Y���̃X���̏���Jane�������Ă��Ȃ����
 * �����ł͔̂݊Y���ƂȂ�A�X���̊Y���͖����ƂȂ�
 * (�X��URL�����ɒ��g����̐V�KThreadItem�I�u�W�F�N�g����铮��͍s��Ȃ�)
 * Action�F�� {BoardAnalysisAction�F�~}�@LateCall:���@Command:��
 * 
 * @param {String} URL �X���܂��͔�URL
 * @return {int} 
 * 0: �Y�������X����������Ȃ�����
 * 1: URI�ɊY�����������
 * 2: URI�ɊY������X���b�h������
 */
_JVS.ThreadFinder.prototype.Find = function(URL){return 0;};

/**
 * ���O��Find()��URL���猟��������Board�I�u�W�F�N�g�BFind()�̖߂�l��1�܂���2�̏ꍇ�Ɏ擾�ł��A
 * Find()�̖߂�l��0�̏ꍇ�ɂ�undefined�B
 * Action�F���@LateCall:���@Command:��
 * @type _JVS.Board
 */
_JVS.ThreadFinder.prototype.Board = new _JVS.Board();

/**
 * ���O��Find()��URL���猟�������X����dat��(dat�t�@�C��������g���q������������)�B
 * Find()�̖߂�l�Ɋւ�炸�AFind�Ŏw�肳�ꂽURL��2chURL�Ƃ��ĉ��߂����Ƃ���dat���ƌ��Ȃ���
 * �������o�͂���B
 * @type String
 */
_JVS.ThreadFinder.prototype.DatName = "1234567890";


/**
 * ���O��Find()��URL���猟�������X���̃��X�Ԏw�蕔����RangeList�`���ŕێ�����
 * Action�F���@LateCall:���@Command:��
 * @example
 * ThreadFinder.Find("http://pc12.2ch.net/test/read.cgi/win/1250004718/1-5,5,4-5");
 * �̎��s���ThreadFinder.Ranges�̓��e�́A�ȉ��̂悤�ɂȂ�(�d���폜��A���A���בւ��͂���Ȃ�)
 * RangeCount == 3
 * RangeBegin(0) == 1, RangeEnd(0) == 5
 * RangeBegin(1) == 5, RangeEnd(1) == 5
 * RangeBegin(2) == 4, RangeEnd(2) == 5
 * WholeRangeWidth == 8
 * @type _JVS.RangeList
 */
_JVS.ThreadFinder.prototype.Ranges = new _JVS.RangeList();

/**
 * ���O��Find()��URL���猟�������X����ThreadItem�I�u�W�F�N�g�BFind()�̖߂�l��2�̏ꍇ�Ɏ擾�ł��A
 * Find()�̖߂�l��0�܂���1�̏ꍇ�ɂ�undefined�B
 * Action�F���@LateCall:���@Command:��
 * @type _JVS.ThreadItem
 */
_JVS.ThreadFinder.prototype.Thread = new _JVS.ThreadItem();
