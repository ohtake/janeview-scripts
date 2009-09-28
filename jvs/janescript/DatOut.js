/*!
 * @include "_InternalClasses.js"
 */

/**
 * �o�b�t�@�Ɏc���Ă��镶������X���r���[�ɕ\������
 * 
 * DatOut�͏����������グ�邽�߂ɓ��͂��ꂽ��������o�b�t�@���A���s�Ȃǂ̃^�C�~���O�ŃX���r���[��
 * �o�͂���B���̂��߁AWrite???�̎��_�ł͕����񂪕\������Ȃ��ꍇ������B�����I�Ƀo�b�t�@�̓��e��
 * �X���r���[�ɏo�͂��������ꍇ��Flush���g�p����
 * 
 * Action�F�~�@LateCall:���@Command:��
 */
_JVS.DatOut.prototype.Flush = function(){};

/**
 * �X���r���[�ɉ��s���������ށB
 * 
 * Action�F�~�@LateCall:���@Command:��
 */
_JVS.DatOut.prototype.WriteBR = function(){};

/**
 * �X���r���[��HTML����������(Doe�ł�HTML���̊ȈՃ}�[�N�A�b�v)
 * HTML��������������ɕ�������WriteHTML����ꍇ�A�^�O�̓r���ŕ������Ă��܂��Ɛ��������ʂ�
 * �����Ȃ��̂Œ��ӂ��邱��
 * 
 * Action�F�~�@LateCall:���@Command:��
 * 
 * @param {String} Text ��������HTML�̕�����
 */
_JVS.DatOut.prototype.WriteHTML = function(Text){};

/**
 * �X���r���[�ɉ摜����������(IE�ł̃X���r���[�ł͓��삵�Ȃ�)
 * 
 * Action�F�~�@LateCall:���@Command:��
 * 
 * @param {String} Src �摜�t�@�C����URL
 * @param {String} Href �摜�̃����N��
 * @param {int} MaxWidth �摜�̍ő啝(�T�C�Y�Œ�̏ꍇ�͉摜�g�̕�)
 * @param {int} MaxHeight �摜�̍ő卂��(�T�C�Y�Œ�̏ꍇ�͉摜�g�̍���)
 * @param {bool} SizeFixed �@�@�摜�̕\���T�C�Y�Œ�̎w��
 * true  �摜�̕\���T�C�Y��MaxWidth�~MaxHeight�ɌŒ�
 * false �摜�̕\���T�C�Y��MaxWidth�~MaxHeight�͈͓̔��Œ���
 */
_JVS.DatOut.prototype.WriteImage = function(Src, Href, MaxWidth, MaxHeight, SizeFixed){};

/**
 * �EDoe�̏ꍇ
 * �X���r���[�ɕ�������������ށB�^�O�╶���Q�Ƃ��x�^�̕�����Ƃ��ďo�͂����B
 * �EIE�ł̏ꍇ
 * �X���r���[�ł�WriteHTML�Ɠ�������
 * 
 * Action�F�~�@LateCall:���@Command:��
 * 
 * @param {String} Text �������ޕ�����
 */
_JVS.DatOut.prototype.WriteText = function(Text){};

/**
 * �w�肵�����X��ViewItem�ɕ\������BWriteThrread�ŕ\���������X�́A���O���猟�����ŕ\�����ꂽ
 * ���X�Ƃقړ����̈����ŁA���F��͈͑I�����ځ[��͓��삷�邪���X�Ԃ�ID�̉E�N���b�N�������Ȃ�
 * Action�F�~�@LateCall:���@Command:��
 * 
 * @param {_JVS.ThreadItem} Thread �\���������X�����Q�Ƃ���ThreadItem
 * @param {int} StartLine �\�����������X�͈͂̍ŏ��̃��X��
 * @param {int} EndLine �\�����������X�͈͂̍Ō�̃��X��(�����X�Ԃ�EndLine�̃��X�͕\���ΏۂɊ܂�)
 * @param {int} AboneLevel �\���Ŏg�p���邠�ځ[��\���`�����w�肷��B���j���[�̃X�����u���[�J�����ځ[��\���̕ύX�v��
 * �����̕\���ݒ肪�\
 * -1�F�Ƃ��߂�
 * 0�F�ӂ�
 * 1�F�ۂ��Ղ�����
 * 2�F���ڂ�
 * 3�F��育�̂�
 * 4�F�͂�����
 * 255�F�|�b�v�A�b�v�q���g�p
 */
_JVS.DatOut.prototype.WriteThread = function(Thread, StartLine, EndLine, AboneLevel){};
